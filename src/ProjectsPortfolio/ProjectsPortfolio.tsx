import "./ProjectsPortfolio.scss";
import { ProjectsPortfolioProps } from "./ProjectsPortfolio.types";
import { linkTo } from "@storybook/addon-links";
import { Col, Row } from "../Grid/Grid";

const ProjectsPortfolio = ({
  pathImage,
  altImage,
  withText,
}: ProjectsPortfolioProps) => {
  return (
    <div
      data-testid="ProjectsPortfolio"
      className={"ProjectsPortfolio RQ-d-flex"}
    >
      <img src={require(`../assets/${pathImage}`)} alt={altImage} />
      <div
        className={`RQ-ml-2 RQ-f-20 ${withText ? "RQ-d-block" : "RQ-d-none"}`}
      >
        Portfolio
      </div>
    </div>
  );
};

export default ProjectsPortfolio;
