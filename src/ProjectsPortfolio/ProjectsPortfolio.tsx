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
    <div data-testid="ProjectsPortfolio" className={"ProjectsPortfolio"}>
      <div className={"RQ-d-flex RQ-align-center RQ-mb-4 RQ-ml-3 RQ-w-50"}>
        <p className={"RQ-theme RQ-mr-2"}>04.</p>
        <p className={"RQ-one-line"}>Yeah, I work hard 💼 </p>
        <hr className={"line"} />
      </div>
      <p className={"RQ-ml-6 RQ-mb-5 RQ-f-16"}>
        Each project is unique. Here are some of my works.
      </p>
      <div className={"RQ-mt-2"}>
        <Row className={"About RQ-d-flex project-content"} noGutter>
          <Col xs={18} other={11} className={"project-img"}>
            <img
              src={
                "https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg"
              }
              alt={altImage}
            />
          </Col>
          <Col xs={18} other={7} className={"project-desc"}>
            <p className={"RQ-theme RQ-f-14 RQ-text-right"}>Featured Project</p>
            <h1 className={"RQ-f-28 RQ-text-right"}>
              Build a Spotify Connected App
            </h1>
            <div className="project-summary">
              <p className={"RQ-f-17 RQ-white RQ-text-center"}>
                A <strong>minimal</strong>, dark blue theme for VS Code, Sublime
                Text, Atom, iTerm, and more. Available on Visual Studio
                Marketplace, Package Control,{" "}
                <a href="#">Atom Package Manager</a>, and npm.
              </p>
            </div>
            <p className={"RQ-my-4 RQ-text-right"}>
              React Styled Components, Express, Spotify API, Heroku
            </p>
            <div className="project-links">
              <a
                href="https://github.com/bchiang7/halcyon-site"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="project-icon RQ-mx-2"
                  data-darkreader-inline-stroke=""
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://halcyon-theme.netlify.com/"
                aria-label="External Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="project-icon RQ-mx-2"
                  data-darkreader-inline-stroke=""
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;
