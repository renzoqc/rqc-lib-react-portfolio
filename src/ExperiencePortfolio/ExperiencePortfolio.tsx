import "./ExperiencePortfolio.scss";
import {
  ExperiencePortfolioProps,
  ExperienceList,
} from "./ExperiencePortfolio.types";
import { Col, Row } from "../Grid/Grid";
import { useState } from "react";

const ExperiencePortfolio = ({ arrExp }: ExperiencePortfolioProps) => {
  const [exp, setExp] = useState<ExperienceList>(arrExp[0]);

  const [expIndex, setExpIndex] = useState<number>(0);

  const updateStateExp = (i: number) => {
    setExp(arrExp[i]);
    setExpIndex(i);
  };

  return (
    <div className="main" data-testid="HomePortfolio" id={"ExperiencePortfolio"}>
      <div className={"header RQ-d-flex RQ-align-center"}>
        <p className={"RQ-theme"}>03.</p>
        <p>Where I've worked</p>
        <hr />
      </div>
      <Row className={"RQ-mt-8 RQ-pl-6"} noGutter>
        <Col xs={18} other={5} className="company">
          {arrExp.map((item, index) => (
            <a href="#" onClick={() => updateStateExp(index)}>
              <div
                className={`RQ-d-flex RQ-align-center left-side ${
                  index === expIndex ? "active" : ""
                }`}
              >
                <p className="RQ-ml-4">{item.company}</p>
              </div>
            </a>
          ))}
        </Col>
        <Col xs={18} other={13} className="content">
          <div className="header RQ-d-flex RQ-align-center">
            <h3 className="RQ-m-0">{exp.title}&nbsp;</h3>
            <a href="#">@{exp.company}</a>
          </div>
          <p className="RQ-f-13">{exp.date}</p>
          <ul>
            {exp.tasks.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ExperiencePortfolio;
