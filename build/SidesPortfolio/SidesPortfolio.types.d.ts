export interface SidesPortfolioProps {
    className?: string;
    left: {
        github: {
            show: boolean;
            url: string;
        };
        instagram: {
            show: boolean;
            url: string;
        };
        twitter: {
            show: boolean;
            url: string;
        };
        linkedin: {
            show: boolean;
            url: string;
        };
        editor: {
            show: boolean;
            url: string;
        };
    };
    right: {
        email: string;
    };
}
