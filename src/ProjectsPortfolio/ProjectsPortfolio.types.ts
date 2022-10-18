export interface ProjectsPortfolioProps {
  /**
   * Defines ...
   */
  arrProjects: {
    img: {
      source: string;
    };
    description: {
      type: string;
      title: string;
      info: any[];
      stack: string;
      github: string;
      url: string;
    };
  }[];
}
