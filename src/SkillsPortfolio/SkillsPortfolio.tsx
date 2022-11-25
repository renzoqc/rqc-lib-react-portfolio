import "./SkillsPortfolio.scss";
import { SkillsPortfolioProps } from "./SkillsPortfolio.types";
import NodeJsIcon from '../assets/icons/tech/nodejs'
import DockerIcon from '../assets/icons/tech/docker'
import ReactjsIcon from '../assets/icons/tech/reactjs'
import NestjsIcon from '../assets/icons/tech/nestjs'

const SkillsPortfolio = ({ header, arrTech }: SkillsPortfolioProps) => {
  return (
    <div
      data-testid="SkillsPortfolio"
      className={"SkillsPortfolio"}
      id={"SkillsPortfolio"}
    >
      <div className={"RQ-d-flex RQ-align-center RQ-mb-4 RQ-f-26"}>
        <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>{`${header.numberOrder}.`}</p>
        <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>{header.text}</p>
        <hr className={"line"} />
      </div>

      <div className="main-skills RQ-justify-center">
        <div className="parallax-inner">
          <div className={"back"}>
            {arrTech.map((tech, index) => (
              <p style={tech.position} key={index}>{tech.name}</p>
            ))}
          </div>
        </div>

        <div className={"front RQ-d-flex RQ-align-center RQ-justify-center"}>
          <div className="icon1">
            <NodeJsIcon/>
          </div>
          <div className="icon2">
            <DockerIcon/>
          </div>
          <div className="icon3">
            <ReactjsIcon/>
          </div>
          <div className="icon4">
            <NestjsIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPortfolio;
