export interface MenuHeaderProps {
    className?: string;
    menu: {
        colorNumber: string;
        colorItem: string;
        data: { name: string; goTo: string; }[];
    };
    logo: {
        path: string;
    };
    resume: {
        name: string;
        goTo: string;
        color: string;
    };
}