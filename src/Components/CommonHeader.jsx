import classes from "./CommonHeader.module.css";
import Container from "./uiElements/Container";
import Btn from "./uiElements/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const LandingSection = ({
  title,
  description,
  btnText,
  to,
  landingBg,
  isneedBtn,
  className,
}) => {
  const landingSecStyle = {
    "--landing-bg": `url(${landingBg})`,
  };
  return (
    <div
      className={`${classes["landing-sec"]} ${className}`}
      style={landingSecStyle}
    >
      <Container className={classes.headContainer}>
        <div className={classes.content}>
          <h1>{title}</h1>
          <p>{description}</p>
          {isneedBtn && (
            <Btn to={to} className={classes.btn}>
              {btnText}
            </Btn>
          )}
        </div>
        <a href={to} className={classes["go-down"]}>
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className={classes["fa-2x"]}
          />
        </a>
      </Container>
    </div>
  );
};

export default LandingSection;
