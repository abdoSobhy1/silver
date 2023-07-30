import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import CommonHeader from "../Components/CommonHeader";
import Container from "../Components/uiElements/Container";

import classes from "./PostPage.module.css";

import tickets from "../DummyData/tickets.json";
const PostPage = () => {
  const { postId } = useParams();
  const post = tickets.find((car) => car.id === postId);
  const { title, imageSrc, description, feats, faq } = post;
  const renderFirstSevenWords = (text) => {
    const words = text.split(" ");
    const firstSevenWords = words.slice(0, 7).join(" ");
    return firstSevenWords;
  };

  return (
    <>
      <CommonHeader
        title={title}
        description={renderFirstSevenWords(description)}
        landingBg={`../${imageSrc}`}
        to="#details"
        className={classes["sub-page"]}
      />
      <main id="details">
        <Container>
          <div className={classes.title}>
            <h2 className={classes["main-heading"]}>
              Get Your <span className={classes.bold}>{title}</span> ticket now!
            </h2>
            <div className={classes.review}>
              <FontAwesomeIcon icon={faStar} className={classes.star} />
              <FontAwesomeIcon icon={faStar} className={classes.star} />
              <FontAwesomeIcon icon={faStar} className={classes.star} />
              <FontAwesomeIcon icon={faStar} className={classes.star} />
              <FontAwesomeIcon icon={faStarHalfAlt} className={classes.star} />
              <span>(1 review)</span>
            </div>
          </div>
          <section>
            <p>{description}</p>
          </section>
          {feats &&
            feats.map((feat, index) => {
              return (
                <section key={index}>
                  <h3 className={classes.title}>{feat.title}</h3>
                  <p>{feat.description}</p>
                </section>
              );
            })}
          {faq && (
            <section>
              <h2 className={classes["main-heading"]}>
                <span className={classes.bold}>FAQs</span>
              </h2>
              {faq.map((question, index) => {
                return (
                  <div key={index} className={classes["faq-box"]}>
                    <h3 className={classes.title}>{question.title}</h3>
                    <p className={classes.ans}>{question.description}</p>
                  </div>
                );
              })}
            </section>
          )}
        </Container>
      </main>
    </>
  );
};

export default PostPage;
