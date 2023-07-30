import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import classes from "./Testimonial.module.css";

const Testimonial = ({ title, content, author, stars, image }) => {
  return (
    <div className={classes.testimonial}>
      <div className={classes.user}>
        <img src={image} alt="" />
      </div>
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>
        <p>{content}</p>
        <h3 className={classes.author}>{author}</h3>
        <div className={classes.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={index < stars ? faStar : farStar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
