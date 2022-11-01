import "./Contact.scss";
import { ContactProps } from "./Contact.types";

const ContactPortfolio = ({ withText }: ContactProps) => {
  return (
    <div data-testid="Contact" className={"Contact"}>
      <p className="RQ-d-flex RQ-theme">04. What's Next?</p>
      <h1 className="RQ-d-flex RQ-f-60">Get In Touch</h1>
      <p className="RQ-d-flex RQ-f-16 RQ-w-50">
        Thanks for stopping by, I’m currently looking to join a new team of
        creative developers. If you think we might be a good fit for one
        another, give me a call 🇵🇪 or send me an email
      </p>
      <a
        className="RQ-d-flex RQ-border-cyan-pf contact-button RQ-theme RQ-f-18"
        href="#"
      >
        Say Hello
      </a>
      <p className="RQ-d-flex RQ-f-12 RQ-mt-3 signature">
        Designed & Built by Renzo Quispe
      </p>
    </div>
  );
};

export default ContactPortfolio;
