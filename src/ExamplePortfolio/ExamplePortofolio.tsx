import "./ExamplePortofolio.scss";
import HeaderPortfolio from "../HeaderPortfolio/HeaderPortfolio";
import SidesPortfolio from "../SidesPortfolio/SidesPortfolio";
import HomePortfolio from "../HomePortfolio/HomePortfolio";
import AboutPortfolio from "../AboutPortfolio/AboutPortfolio";
import SkillsPortfolio from "../SkillsPortfolio/SkillsPortfolio";
import ExperiencePortfolio from "../ExperiencePortfolio/ExperiencePortfolio";
import ProjectsPortfolio from "../ProjectsPortfolio/ProjectsPortfolio";
import ContactPortfolio from "../ContactPortfolio/Contact";

const ExamplePortofolio = (
    {
        headerPortfolio,
        sidesPortfolio,
        homePortfolio,
        aboutPortfolio,
        skillsPortfolio,
        experiencePortfolio,
        projectsPortfolio,
        contactPortfolio,
    }: any) => {
    return (
        <div data-testid="ExamplePortofolio" className={"ExamplePortofolio"}>
            <HeaderPortfolio
                logo={headerPortfolio.logo}
                menuHeader={headerPortfolio.menuHeader}
            />
            <SidesPortfolio left={sidesPortfolio.left} right={sidesPortfolio.right}/>
            <div className="content-center-sides">
                <HomePortfolio
                    greeting={homePortfolio.greeting}
                    name={homePortfolio.name}
                    subtitle={homePortfolio.subtitle}
                    content={homePortfolio.content}
                    resume={homePortfolio.resume}
                    img={homePortfolio.img}
                />
                <AboutPortfolio
                    header={aboutPortfolio.header}
                    image={aboutPortfolio.image}
                    arrAbout={aboutPortfolio.arrAbout}
                    arrThoughts={aboutPortfolio.arrThoughts}
                />
                <SkillsPortfolio
                    header={skillsPortfolio.header}
                    arrTech={skillsPortfolio.arrTech}
                />
                <ExperiencePortfolio
                    header={experiencePortfolio.header}
                    arrExp={experiencePortfolio.arrExp}
                />
                <ProjectsPortfolio
                    header={projectsPortfolio.header}
                    arrProjects={projectsPortfolio.arrProjects}
                />
                <ContactPortfolio
                    header={contactPortfolio.header}
                    phrase={contactPortfolio.phrase}
                    content1={contactPortfolio.content1}
                    content2={contactPortfolio.content2}
                    buttonText={contactPortfolio.buttonText}
                    buttonGoTo={contactPortfolio.buttonGoTo}
                    signature={contactPortfolio.signature}
                />
            </div>
        </div>
    );
};

export default ExamplePortofolio;
