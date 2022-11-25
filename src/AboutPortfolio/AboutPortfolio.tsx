import "./AboutPortfolio.scss";
import { AboutPortfolioProps } from "./AboutPortfolio.types";
import { Col, Row } from "../Grid/Grid";
import Image from "../Image/Image";
import { useEffect, useState } from "react";

const AboutPortfolio = ({
  header,
  pathImage,
  arrAbout,
  arrThoughts,
}: AboutPortfolioProps) => {
  const CircleGreen = ({ listKey }: { listKey: number}) => (
    <svg height="20" width="20" className={"circle"} key={listKey}>
      <circle cx="10" cy="10" r="6" strokeWidth="1.5" />
    </svg>
  );

  const arrCircle: number[] = Array.from(Array(arrAbout.length).keys());

  const [about, setAbout] = useState<string>("");
  const [sizeAbout, setSizeAbout] = useState<number>(3);

  useEffect(() => {
    setAbout(arrAbout[sizeAbout]);
  }, []);

  const updateAbout = (i: number) => {
    setAbout(arrAbout[i]);
    setSizeAbout(i);
  };

  return (
    <div
      data-testid="AboutPortfolio"
      className={"AboutPortfolio"}
      id={"AboutPortfolio"}
    >
      <Row className={"About RQ-d-flex"} noGutter flex>
        <Col olg={10} ulg={18} className={"content"}>
          <div className={"RQ-d-flex RQ-align-center RQ-mb-4 RQ-f-26"}>
            <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>{`${header.numberOrder}.`}</p>
            <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>{header.text}</p>
            <hr className={"line"} />
          </div>
          <div className={"circle-section"}>
            <p className={"RQ-f-12 RQ-mb-4 RQ-ml-4 RQ-description"}>
              ADJUST BIO LENGTH:
            </p>
            {arrCircle.map((i, index) => (
              <a
                style={{ cursor: "pointer" }}
                key={index}
                className={`${
                  arrCircle.length - 1 === i || i === 0
                    ? (i === 0 ? "RQ-mr-4" : "") ||
                      (arrCircle.length - 1 === i ? "RQ-ml-4" : "")
                    : "RQ-mx-4"
                } ${i === sizeAbout ? "active" : ""} `}
                onClick={() => updateAbout(i)}
              >
                <CircleGreen listKey={index} />
              </a>
            ))}
            <div className={"RQ-description"}>
              <div className={"left"}>shortest</div>
              <div className={"right"}>longest</div>
            </div>
          </div>
          <div className={"RQ-name RQ-f-18 RQ-description-content"}  dangerouslySetInnerHTML={{ __html: about }}/>
        </Col>
        <Col olg={8} ulg={18}>
          <Image
            classImg={""}
            pathImage={pathImage}
            altImage={"portfolio"}
            border={true}
            fade={true}
          />
        </Col>
      </Row>
      <Row className={"thoughts RQ-d-flex RQ-justify-center RQ-mx-5"} noGutter flex>
        {arrThoughts.map((item, index) => (
          <Col umd={18} omd={6} key={index}>
            <div
              className={`container RQ-description ${
                index === 0 ? "RQ-ml-4" : "RQ-ml-4"
              }`}
            >
              <p className={"RQ-f-14"}>"{item}"</p><br/>
              <p className={"signature RQ-f-13"}>- Renzo Quispe</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutPortfolio;
