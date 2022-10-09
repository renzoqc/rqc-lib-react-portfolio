import './HeaderPortfolio.scss';
import { HeaderPortfolioProps } from './HeaderPortfolio.types';
import {linkTo} from "@storybook/addon-links";
import { Col, Row } from '../Grid/Grid';
import Logo from "../Logo/Logo";
import MenuHeader from "../MenuHeader/MenuHeader";

const HeaderPortfolio = ({
    logo,
    menuHeader,
}: HeaderPortfolioProps) => {
    return (
        <Row
            data-testid="HeaderPortfolio"
            className={'HeaderPortfolio RQ-d-flex'}
        >
            <Col xs={18} other={5} className="">
                <Logo
                    pathImage={logo.pathImage}
                    altImage={logo.altImage}
                    withText={logo.withText}
                />
            </Col>
            <Col xs={18} other={13} className="">
                <MenuHeader
                    menu={menuHeader.menu}
                    logo={menuHeader.logo}
                    resume={menuHeader.resume}
                />
            </Col>
        </Row>
    );
};

export default HeaderPortfolio;