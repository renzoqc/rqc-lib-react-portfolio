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

  const selectCompany = (event) => {
    updateStateExp(event.target.value);
  };

  return (
    <div
      className="main"
      data-testid="ExperiencePortfolio"
      id={"ExperiencePortfolio"}
    >
      <div className={"header RQ-d-flex RQ-align-center RQ-f-26"}>
        <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>03.</p>
        <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>
          Where I've worked
        </p>
        <hr className={"line"} />
      </div>
      <div className="custom-select">
        <p className={'RQ-description RQ-d-flex RQ-justify-center RQ-mb-2'}>Select company:</p>
        <div className="RQ-d-flex RQ-justify-center">
          <select onChange={selectCompany}>
            {arrExp.map((item, index) => (
                <option key={index} value={index}>{item.company}</option>
            ))}
          </select>
        </div>
      </div>
      <Row className={"content-exp"} noGutter>
        <Col xs={0} other={5} className="company">
          {arrExp.map((item, index) => (
            <a onClick={() => updateStateExp(index)}>
              <div
                className={`RQ-d-flex RQ-align-center left-side RQ-f-code ${
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
            <h3 className="RQ-m-0 RQ-name RQ-f-18">{exp.title}&nbsp;</h3>
            <a href="#" className="RQ-f-bold RQ-f-18">
              @{exp.company}
            </a>
          </div>
          <p className="RQ-f-14 RQ-description">{exp.date}</p>
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
