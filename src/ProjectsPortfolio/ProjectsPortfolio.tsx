import "./ProjectsPortfolio.scss";
import {ProjectsPortfolioProps} from "./ProjectsPortfolio.types";
import {Col, Row} from "../Grid/Grid";

const getArrayFromString = (word: string) => {
    const valuesList = word.includes(',') ? word.split(',') : word
    return Array.isArray(valuesList) ? valuesList.map((e) => e.trim()) : [valuesList.trim()]
}

const ProjectsPortfolio = ({className = 'ProjectsPortfolio', header, arrProjects}: ProjectsPortfolioProps) => {
    const ProjectItemLeft = (props: {
        content: {
            img: {
                source: string;
            };
            description: {
                type: string;
                title: string;
                info: string;
                stack: string;
                github: string;
                url: string;
            };
        };
    }) => {
        const stackArray = getArrayFromString(props.content.description.stack)
        return (
            <div
                className={"RQ-my-5"}
                style={{margin: "50px 0 90px 0"}}
                id={"ProjectsPortfolio"}
            >
                <Row className={"RQ-d-flex project-content"} noGutter>
                    <Col xs={18} other={11} className={"project-img"}>
                        <img src={props.content.img.source}/>
                    </Col>
                    <Col xs={18} other={7} className={"project-desc"}>
                        <p className={"RQ-theme RQ-f-14 RQ-text-right"}>
                            {props.content.description.type}
                        </p>
                        <h1 className={"RQ-f-28 RQ-text-right RQ-white RQ-hover-theme RQ-ml-5"}>
                            {props.content.description.title}
                        </h1>
                        <div className="project-summary">
                            <p className={"RQ-f-17 RQ-white RQ-text-center"}
                               dangerouslySetInnerHTML={{__html: props.content.description.info}}/>
                        </div>
                        <div className={'list-stack-card'}>
                            <ul>
                                {stackArray.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-links">
                            <a
                                href={props.content.description.github}
                                aria-label="GitHub Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                key={"0"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="project-icon RQ-mx-2"
                                    data-darkreader-inline-stroke=""
                                >
                                    <title>GitHub</title>
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a
                                href={props.content.description.url}
                                aria-label="External Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                key={"1"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
        )
    }

    const ProjectItemRight = (props: {
        content: {
            img: {
                source: string;
            };
            description: {
                type: string;
                title: string;
                info: string;
                stack: string;
                github: string;
                url: string;
            };
        };
    }) => {
        const stackArray = getArrayFromString(props.content.description.stack)
        return (
            <div className={"RQ-my-5"} style={{margin: "50px 0 90px 0"}}>
                <Row className={"RQ-d-flex project-content-opposite"} noGutter>
                    <Col xs={18} other={7} className={"project-desc"}>
                        <p className={"RQ-theme RQ-f-14 RQ-text-left"}>
                            {props.content.description.type}
                        </p>
                        <h1 className={"RQ-f-28 RQ-text-left RQ-white RQ-hover-theme RQ-mr-5"}>
                            {props.content.description.title}
                        </h1>
                        <div className="project-summary">
                            <p className={"RQ-f-17 RQ-white RQ-text-center"}
                               dangerouslySetInnerHTML={{__html: props.content.description.info}}/>
                        </div>
                        <div className={'list-stack-card'}>
                            <ul>
                                {stackArray.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-links">
                            <a
                                href={props.content.description.github}
                                aria-label="GitHub Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                key="0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="project-icon RQ-mx-2"
                                    data-darkreader-inline-stroke=""
                                >
                                    <title>GitHub</title>
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a
                                href={props.content.description.url}
                                aria-label="External Link"
                                rel="noopener noreferrer"
                                target="_blank"
                                key="1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
                    <Col xs={18} other={11} className={"project-img"}>
                        <img src={props.content.img.source}/>
                    </Col>
                </Row>
            </div>
        )
    }

    const ProjectsMobile = (props: {
        content: {
            img: {
                source: string;
            };
            description: {
                type: string;
                title: string;
                info: string;
                stack: string;
                github: string;
                url: string;
            };
        };
        myKey: number;
    }) => {

        const stackArray = getArrayFromString(props.content.description.stack)
        return (
            <div className={'project-mobile-card'} key={props.myKey}>
                <p className={"RQ-theme RQ-f-16 RQ-text-left"}>
                    {props.content.description.type}
                </p>
                <h1 className={"RQ-f-22 RQ-text-left RQ-white RQ-hover-theme RQ-mb-4"}>
                    {props.content.description.title}
                </h1>
                <div className="project-summary">
                    <p className={"RQ-f-18 RQ-white"}
                       dangerouslySetInnerHTML={{__html: props.content.description.info}}/>
                </div>
                <p className={"RQ-my-4 RQ-text-left RQ-description"}>
                    {props.content.description.stack}
                </p>
                <div className="project-links">
                    <a
                        href={props.content.description.github}
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="project-icon RQ-mx-2"
                            data-darkreader-inline-stroke=""
                        >
                            <title>GitHub</title>
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a
                        href={props.content.description.url}
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
            </div>
        )
    }

    return (
        <div data-testid="ProjectsPortfolio" className={className} id="ProjectsPortfolio">
            <div
                className={"RQ-d-flex RQ-align-center projects-header RQ-f-26"}
            >
                <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>{`${header.numberOrder}.`}</p>
                <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>{header.text}</p>
                <hr className={"line"}/>
            </div>
            <p className={"projects-desc RQ-mb-5 RQ-f-16 RQ-name RQ-f-18"}>
                Each project is unique. Here are some of my works.
            </p>
            <div className="projects-desktop" key={"0"}>
                {arrProjects.map((item, index) =>
                    index % 2 == 0 ? (
                        <ProjectItemLeft content={item} key={index}/>
                    ) : (
                        <ProjectItemRight content={item} key={index}/>
                    )
                )}
            </div>
            <div className="projects-mobile" key={"1"}>
                {arrProjects.map((item, index) =>
                    <ProjectsMobile content={item} myKey={index} key={index}/>
                )}
            </div>
        </div>
    );
};

export default ProjectsPortfolio;
