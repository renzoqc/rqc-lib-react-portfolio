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
      external: boolean;
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
