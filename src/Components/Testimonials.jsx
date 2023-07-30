import React from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "./Testimonials.css";
import Container from "./uiElements/Container";
import BoldHeading from "./uiElements/BoldHeading";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      title: "Customer Service at its finest",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptatum, quia, voluptas quas voluptatem quae exercitationem voluptates quibusdam quidem quos. Quisquam voluptates, quae, quibusdam, quos quod voluptas quidem voluptatem.",
      author: "Steve Jobs",
      stars: 5,
      image: "../../src/assets/images/users/steve.jpg",
    },
    {
      title: "Efficient Visa Processing",
      content:
        "Getting my visa processed through SilverJarz was a breeze. They handled everything swiftly and professionally. I'll definitely use their services again in the future.",
      author: "Mary Johnson",
      stars: 5,
      image: "../../src/assets/images/users/mary.jpg",
    },
    {
      title: "Fantastic Travel Experience",
      content:
        "I had the most amazing travel experience with SilverJarz. Their attention to detail and excellent customer service made the trip unforgettable. Highly recommended!",
      author: "John Smith",
      stars: 4,
      image: "../../src/assets/images/users/john.jpg",
    },
    {
      title: "Efficient Visa Processing",
      content:
        "Getting my visa processed through SilverJarz was a breeze. They handled everything swiftly and professionally. I'll definitely use their services again in the future.",
      author: "Mary Johnson",
      stars: 5,
      image: "../../src/assets/images/users/mary.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <section className="reviews">
      <Container className="revCont">
        <BoldHeading text="See what Our Customers are" bold="Saying" />
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialsSlider;
