import Slider from "react-slick";
import Container from "./uiElements/Container";

import classes from "./CountrySelector.module.css";

import "./CountrySlider.css";

const countriesData = [
  {
    name: "United Arab Emirates",
    flag: "../../src/assets/images/countries/uae.jpg",
  },
  {
    name: "Saudi Arabia",
    flag: "../../src/assets/images/countries/ksa.jpg",
  },
  {
    name: "Oman",
    flag: "../../src/assets/images/countries/oman.png",
  },
  {
    name: "Schengen",
    flag: "../../src/assets/images/countries/eu.png",
  },
  {
    name: "United Kingdom",
    flag: "../../src/assets/images/countries/uk.png",
  },
];

const CountrySelector = ({ onCountrySelect }) => {
  const handleButtonClick = (event) => {
    const selectedCountry = event.target.dataset.name;
    onCountrySelect(selectedCountry);
  };
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
  };
  return (
    <section className="countries">
      <Container className={classes.csCont}>
        <Slider {...settings}>
          {countriesData.map((country, index) => (
            <button
              className={classes["country-flag-container"]}
              key={index}
              data-name={country.name}
              onClick={handleButtonClick}
            >
              <img
                src={country.flag}
                alt={`Flag of ${country.name}`}
                className={classes["flag-image"]}
                data-name={country.name}
              />
            </button>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default CountrySelector;
