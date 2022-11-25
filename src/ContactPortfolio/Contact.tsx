import "./Contact.scss";
import { ContactProps } from "./Contact.types";

const ContactPortfolio = ({ header, phrase, content1, content2, buttonText, signature, buttonGoTo }: ContactProps) => {
  return (
    <div data-testid="Contact" className={"Contact"} id={"ContactPortfolio"}>
      <p className="RQ-d-flex RQ-theme RQ-f-code contact-header RQ-f-16">{`${header.numberOrder}. ${header.text}`}</p>
      <h1 className="RQ-d-flex RQ-f-60 RQ-name RQ-f-helvetica">{phrase}</h1>
      <p className="RQ-d-flex RQ-f-16 RQ-description RQ-f-20 contact-content">
        {content1}
      </p>
        <br/>
      <p className="RQ-d-flex RQ-f-16 RQ-description RQ-f-20 contact-content">
        {content2}
      </p>
      <a
        className="RQ-d-flex RQ-border-cyan-pf contact-button RQ-theme RQ-f-18"
        href={`mailto:${buttonGoTo}`}
      >
        {buttonText}
      </a>
      <p className="RQ-d-flex RQ-f-13 RQ-my-3 signature RQ-hover-theme">{signature}</p>
    </div>
  );
};

export default ContactPortfolio;
