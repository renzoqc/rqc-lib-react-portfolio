export interface HeaderPortfolioProps {
  /**
   * Defines ...
   */
  logo: {
    withText: boolean;
    pathImage: string;
    altImage: string;
  };
  menuHeader: {
    menu: {
      colorNumber: string;
      colorItem: string;
      data: { name: string; goTo: string }[];
    };
    logo: {
      path: string;
    };
    resume: {
      name: string;
      goTo: string;
      color: string;
    };
  };
}
