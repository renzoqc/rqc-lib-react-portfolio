export interface SidesTechItem {
  name: string;
  url: string;
}

export interface SidesPortfolioProps {
  className?: string;
  left: SidesTechItem[];
  right: {
    email: string;
  };
}
