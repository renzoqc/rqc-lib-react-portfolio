export interface ExperiencePortfolioProps {
  /**
   * Defines ...
   */
  header: {
    numberOrder: string;
    text: string;
  };
  arrExp: ExperienceList[];
}

export interface ExperienceList {
  company: string;
  title: string;
  date: string;
  country: string;
  goTo: string;
  tasks: { content: string }[];
}
