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
  tasks: { content: string }[];
}
