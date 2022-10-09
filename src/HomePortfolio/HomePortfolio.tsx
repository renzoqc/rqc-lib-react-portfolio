import './HomePortfolio.scss';
import { HomePortfolioProps } from './HomePortfolio.types';
import {linkTo} from "@storybook/addon-links";
import { Col, Row } from '../Grid/Grid';
import Logo from "../Logo/Logo";
import Image from "../Image/Image";

const HomePortfolio = ({
    greeting,
    name,
    subtitle,
    content,
    resume,
    img,
}: HomePortfolioProps) => {
    return (
        <Row
            data-testid="HomePortfolio"
            className={'HomePortfolio RQ-d-flex'}
            noGutter
        >
            <Col xs={18} other={13} className="content">
                <p className={'RQ-f-16 RQ-theme RQ-my-1'}>{greeting}</p>
                <h1 className={'RQ-f-80 RQ-name RQ-my-1'}>{name}</h1>
                <h1 className={'RQ-f-80 RQ-subTitle RQ-my-1'}>{subtitle}</h1>
                <Col xs={18} other={11}>
                    <p className={'RQ-f-20 RQ-l-1_5em'}>{content}</p>
                </Col>
                <Col xs={18} other={18} className={'RQ-mt-4 download'}>
                    <a href={'#'} className={'RQ-f-18 RQ-theme RQ-border-cyan-pf RQ-d-flex RQ-justify-center'}>{resume.text}</a>
                </Col>
                <Col xs={18} other={18} className={'scroll RQ-d-flex'}>
                    <a href="#" className={'RQ-d-flex RQ-justify-center RQ-align-center'}>
                        <svg className={''} width="24px" height="24px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <g><path d="M18.364 13.636a1 1 0 0 0-1.414 0L13 17.586V4a1 1 0 0 0-2 0v13.586l-3.95-3.95a1 1 0 0 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414z"/></g>
                        </svg>
                        scroll
                    </a>
                </Col>
            </Col>
            <Col xs={18} other={5} className="RQ-d-flex RQ-justify-center img-about">
                <img src={require(`../assets/${img.path}`)} alt={`${img.alt}`}/>
            </Col>
        </Row>
    );
};

export default HomePortfolio;