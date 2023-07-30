import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import CommonHeader from "../Components/CommonHeader";
import Container from "../Components/uiElements/Container";
import SideBar from "../Components/uiElements/SideBar";

import classes from "./PostPage.module.css";

import tickets from "../DummyData/tickets.json";
const PostPage = () => {
  const { postId } = useParams();
  const post = tickets.find((ticket) => ticket.id === postId);
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
      <section id="details">
        <Container className={classes.cont}>
          <main>
            <div className={classes.title}>
              <h2 className={classes["main-heading"]}>
                Book Your <span className={classes.bold}>{title}</span> now!
              </h2>
              <div className={classes.review}>
                <FontAwesomeIcon icon={faStar} className={classes.star} />
                <FontAwesomeIcon icon={faStar} className={classes.star} />
                <FontAwesomeIcon icon={faStar} className={classes.star} />
                <FontAwesomeIcon icon={faStar} className={classes.star} />
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className={classes.star}
                />
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
          </main>
          <SideBar>
            <div className={classes.feat}>
              <h3>Destination</h3>
              <p>{title}</p>
            </div>
            <div className={classes.feat}>
              <h3>Duration</h3>
              <p>3 days</p>
            </div>
            <div className={classes.feat}>
              <h3>Price</h3>
              <p>$200</p>
            </div>
            <div className={classes.feat}>
              <h3>Rating</h3>
              <p>4.5</p>
            </div>
            <div className={classes.feat}>
              <h3>Availability</h3>
              <p>20</p>
            </div>
            <div className={classes.feat}>
              <h3>Max Group Size</h3>
              <p>10</p>
            </div>
          </SideBar>
        </Container>
      </section>
    </>
  );
};

export default PostPage;
