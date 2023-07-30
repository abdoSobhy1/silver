import Container from "../Components/uiElements/Container";
import VisaCard from "../Components/uiElements/VisaCard";
import BoldHeading from "./uiElements/BoldHeading";

import classes from "./VisaTypes.module.css";

const dubaiVisas = [
  {
    regular: "225",
    express: "295",
    stay: "30 Days",
  },
  {
    regular: "180",
    express: "250",
    stay: "14 Days",
  },
  {
    regular: "350",
    express: "450",
    stay: "90 Days",
  },
  {
    regular: "120",
    express: "200",
    stay: "7 Days",
  },
  {
    regular: "400",
    express: "550",
    stay: "60 Days",
  },
  {
    regular: "250",
    express: "320",
    stay: "45 Days",
  },
  {
    regular: "320",
    express: "420",
    stay: "15 Days",
  },
  {
    regular: "280",
    express: "380",
    stay: "21 Days",
  },
];
const VisaTypes = ({ selectedCountry }) => {
  return (
    <section>
      <Container className={classes.visaCont}>
        <BoldHeading text="Most Popular" bold="Dubai Visas" />
        <div className={classes.types}>
          {dubaiVisas.map((visa, index) => {
            return (
              <VisaCard
                regular={visa.regular}
                express={visa.express}
                stay={visa.stay}
                dest={selectedCountry}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default VisaTypes;
