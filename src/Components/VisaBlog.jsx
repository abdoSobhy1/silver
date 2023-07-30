import OffersSlider from "./OffersSlider";
import Container from "./uiElements/Container";
import MainTitle from "./uiElements/MainTitle";

import classes from "./Offers.module.css";

const Offers = () => {
  return (
    <section className="offers">
      <Container className={classes.offersCont}>
        <MainTitle>Visa Blog</MainTitle>
        <div className="container">
          <OffersSlider />
        </div>
      </Container>
    </section>
  );
};

export default Offers;
