export interface ExperiencePortfolioProps {
  /**
   * Defines ...
   */
  arrExp: ExperienceList[];
}

export interface ExperienceList {
  company: string;
  title: string;
  date: string;
  tasks: { content: string }[];
}
