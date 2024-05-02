export interface AboutPortfolioProps {
    className?: string;
    header: {
        numberOrder: string;
        text: string;
    };
    image: {
        path: string;
        width: number;
        height: number;
        desktopMultiplier: number;
    };
    arrAbout: string[];
    arrThoughts: string[];
}
