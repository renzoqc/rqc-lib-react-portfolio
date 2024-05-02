import "./Logo.scss";
import {LogoProps} from "./Logo.types";

const Logo = ({pathImage, altImage, withText, width = 50, text}: LogoProps) => {
    return (
        <div data-testid="Logo" className={"Logo RQ-d-flex"}>
            <img src={pathImage} alt={altImage} width={width}/>
            <div
                className={`RQ-ml-2 RQ-f-20 ${withText ? "RQ-d-block" : "RQ-d-none"}`}
            >
                {text}
            </div>
        </div>
    );
};

export default Logo;
