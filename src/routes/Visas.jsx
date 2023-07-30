import { useState } from "react";

import Testimonials from "../Components/Testimonials";
import VisaTypes from "../Components/VisaTypes";
import WhyUs from "../Components/WhyUs";
import VisaBlog from "../Components/VisaBlog";
import CountrySelector from "../Components/CountrySelector";

const Visas = () => {
  const [selectedCountry, setSelectedCountry] = useState("UAE");

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
  };
  return (
    <>
      <CountrySelector onCountrySelect={handleCountrySelection} />
      <VisaTypes selectedCountry={selectedCountry} />
      <Testimonials />
      <WhyUs />
      <VisaBlog />
    </>
  );
};

export default Visas;
