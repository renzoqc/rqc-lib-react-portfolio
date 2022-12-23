import "./Logo.scss";
import { LogoProps } from "./Logo.types";
import { linkTo } from "@storybook/addon-links";
import { Col, Row } from "../Grid/Grid";

const Logo = ({ pathImage, altImage, withText }: LogoProps) => {
  return (
    <div data-testid="Logo" className={"Logo RQ-d-flex"}>
      <img src={pathImage} alt={altImage} />
      <div
        className={`RQ-ml-2 RQ-f-20 ${withText ? "RQ-d-block" : "RQ-d-none"}`}
      >
        Portfolio
      </div>
    </div>
  );
};

export default Logo;
