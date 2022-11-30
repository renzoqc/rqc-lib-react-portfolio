export interface HomePortfolioProps {
    /**
     * Defines ...
     */
    greeting: string;
    name: string;
    subtitle: string;
    content: string;
    resume: {
        text: string;
        goTo: string;
    };
    img: {
        path: string;
        alt: string;
    }
}