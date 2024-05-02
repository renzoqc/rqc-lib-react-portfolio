import './MenuHeader.scss';
import {MenuHeaderProps} from './MenuHeader.types';
import {Row} from '../Grid/Grid';


const MenuHeader = (
    {
        className = 'MenuHeader',
        menu,
        logo,
        resume
    }: MenuHeaderProps) => {
    return (
        <Row
            data-testid="MenuHeader"
            className={`${className} RQ-f-13`}
            noGutter
        >
            <ul className={"RQ-d-flex"}>
                {menu.data.map((item, i) =>
                    <li key={i}>
                        <a href={item.goTo} className={`RQ-${menu.colorItem}`}>
                            <span className={`RQ-${menu.colorNumber}`}>0{i + 1}.</span> {item.name}
                        </a>
                    </li>
                )}
                <a
                    href={resume.goTo}
                    target="_blank"
                    className={`resume RQ-border-${resume.color} RQ-${resume.color}`}
                >{resume.name}</a>
            </ul>
        </Row>
    );
};

export default MenuHeader;
