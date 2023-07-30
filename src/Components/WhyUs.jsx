import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMobileScreen,
  faRoute,
  faShield,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock as farClock,
  faHandshake as farHandshake,
} from "@fortawesome/free-regular-svg-icons";
import classes from "./WhyUs.module.css";

import Container from "./uiElements/Container";
import MainTitle from "./uiElements/MainTitle";

const data = [
  {
    icon: faClock,
    title: "Save Time & Effort",
    subtitle: "By Booking Online!",
  },
  { icon: faMobileScreen, title: "Real Time", subtitle: "Tracking" },
  { icon: faRoute, title: "Visa", subtitle: "Consultation" },
  { icon: farClock, title: "Some Regular Icon", subtitle: "Subtitle Regular" },
  { icon: faShield, title: "Safety, Security", subtitle: "& Transparency" },
  { icon: faHeadphonesSimple, title: "24x7", subtitle: "Customer Support" },
  {
    icon: farHandshake,
    title: "Facilitation of Booking",
    subtitle: "Appointment with Embassy",
  },
];

const WhyUs = () => {
  const leftData = data.slice(0, 3);
  const rightData = data.slice(data.length - 3);

  return (
    <section className={classes["why-us"]}>
      <MainTitle>Why Book with SilverJarz</MainTitle>
      <p>
        Celebrating 300,000 happy customers and endless memories for a lifetime.
      </p>
      <Container className={classes.container}>
        <div className={classes["why-boxes"]}>
          <div className={classes.left}>
            {leftData.map((item, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <h3>
                  {item.title}
                  <span>{item.subtitle}</span>
                </h3>
              </div>
            ))}
          </div>
          <div className={classes.center}>
            <div className={classes["vsc-controller"]}></div>
            <video width="100%" controls>
              <source
                src="https://www.houseoftours.com/10kLove/hoft-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={classes.right}>
            {rightData.map((item, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <h3>
                  {item.title}
                  <span>{item.subtitle}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
