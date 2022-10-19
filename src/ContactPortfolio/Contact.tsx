import "./Contact.scss";
import { ContactProps } from "./Contact.types";
import { linkTo } from "@storybook/addon-links";
import { Col, Row } from "../Grid/Grid";

const Contact = ({ pathImage, altImage, withText }: ContactProps) => {
  return (
    <div data-testid="Contact" className={"Contact RQ-d-flex"}>
      <img src={require(`../assets/${pathImage}`)} alt={altImage} />
      <div
        className={`RQ-ml-2 RQ-f-20 ${withText ? "RQ-d-block" : "RQ-d-none"}`}
      >
        Portfolio
      </div>
    </div>
  );
};

export default Contact;
