import "./Contact.scss";
import { ContactProps } from "./Contact.types";

const ContactPortfolio = ({ content, buttonText }: ContactProps) => {
  return (
    <div data-testid="Contact" className={"Contact"} id={"ContactPortfolio"}>
      <p className="RQ-d-flex RQ-theme RQ-f-code">04. What's Next?</p>
      <h1 className="RQ-d-flex RQ-f-60 RQ-name RQ-f-helvetica">Get In Touch</h1>
      <p className="RQ-d-flex RQ-f-16 RQ-w-50 RQ-description RQ-f-20">
        {content}
      </p>
      <a
        className="RQ-d-flex RQ-border-cyan-pf contact-button RQ-theme RQ-f-18"
        href="#"
      >
        {buttonText}
      </a>
      <p className="RQ-d-flex RQ-f-13 RQ-mt-3 signature RQ-hover-theme">
        Designed & Built by Renzo Quispe
      </p>
    </div>
  );
};

export default ContactPortfolio;
