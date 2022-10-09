import "./SkillsPortfolio.scss";
import { SkillsPortfolioProps } from "./SkillsPortfolio.types";
// import { linkTo } from "@storybook/addon-links";
// import { Col, Row } from "../Grid/Grid";
// import Image from "../Image/Image";
// import { useEffect, useState } from "react";

const SkillsPortfolio = ({
  pathImage,
  altImage,
  withText,
}: SkillsPortfolioProps) => {
  const arrTech: { name: string; position: any }[] = [
    { name: "CSS3", position: { top: "10%", left: "15%" } },
    { name: "PostgreSQL", position: { top: "4%", left: "26%" } },
    { name: "Docker", position: { top: "30%", left: "22%" } },
    { name: "NestJS", position: { top: "25%", left: "46%" } },
    { name: "Sass", position: { top: "10%", left: "56%" } },
    { name: "ES6", position: { top: "40%", left: "66%" } },
    { name: "Javascript", position: { top: "12%", left: "71%" } },
    { name: "Python", position: { top: "28%", left: "85%" } },
    { name: "Git", position: { top: "90%", left: "11%" } },
    { name: "MongoDB", position: { top: "95%", left: "30%" } },
    { name: "EspressJS", position: { top: "80%", left: "55%" } },
    { name: "Typescript", position: { top: "94%", left: "73%" } },
    { name: "RestFULL", position: { top: "82%", left: "84%" } },
  ];

  return (
    <div data-testid="SkillsPortfolio" className={"SkillsPortfolio"}>
      <div className={"RQ-d-flex RQ-align-center RQ-mb-4 RQ-w-50"}>
        <p className={"RQ-theme RQ-mr-2"}>02.</p>
        <p>Skillsets</p>
        <hr className={"line"} />
      </div>
      
      

      <div className={"techs-back"}>
        {arrTech.map((tech) => (
          <p style={tech.position}>{tech.name}</p>
        ))}
      </div>

      <div className={"icons-front"}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <rect width="24" height="24" fill="#F1DC50" />
            <path
              stroke="#333"
              stroke-width="2"
              d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SkillsPortfolio;
