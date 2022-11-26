export interface ProjectsPortfolioProps {
  /**
   * Defines ...
   */
  header: {
    numberOrder: string;
    text: string;
  };
  arrProjects: {
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
  }[];
}
