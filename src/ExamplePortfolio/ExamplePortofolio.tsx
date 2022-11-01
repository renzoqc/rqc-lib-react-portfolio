import "./ExamplePortofolio.scss";
import { ExamplePortofolioProps } from "./ExamplePortofolio.types";
import HeaderPortfolio from "../HeaderPortfolio/HeaderPortfolio";
import SidesPortfolio from "../SidesPortfolio/SidesPortfolio";
import HomePortfolio from "../HomePortfolio/HomePortfolio";
import AboutPortfolio from "../AboutPortfolio/AboutPortfolio";
import SkillsPortfolio from "../SkillsPortfolio/SkillsPortfolio";
import ExperiencePortfolio from "../ExperiencePortfolio/ExperiencePortfolio";
import ProjectsPortfolio from "../ProjectsPortfolio/ProjectsPortfolio";
import ContactPortfolio from "../ContactPortfolio/Contact";

const ExamplePortofolio = ({
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
      <SidesPortfolio left={sidesPortfolio.left} right={sidesPortfolio.right} />
      <div className="content-center-sides">
        <HomePortfolio
          greeting={homePortfolio.greeting}
          name={homePortfolio.name}
          subtitle={homePortfolio.subTitle}
          content={homePortfolio.content}
          resume={homePortfolio.resume}
          img={homePortfolio.img}
        />
        <AboutPortfolio
          pathImage={aboutPortfolio.pathImage}
          arrAbout={aboutPortfolio.arrAbout}
          arrThoughts={aboutPortfolio.arrThoughts}
        />
        <SkillsPortfolio arrTech={skillsPortfolio.arrTech} />
        <ExperiencePortfolio arrExp={experiencePortfolio.arrExp} />
        <ProjectsPortfolio arrProjects={projectsPortfolio.arrProjects} />
        <ContactPortfolio withText={contactPortfolio.withText} />
      </div>
    </div>
  );
};

export default ExamplePortofolio;
