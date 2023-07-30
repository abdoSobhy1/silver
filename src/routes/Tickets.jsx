import CommonHeader from "../Components/CommonHeader";
import Post from "../Components/uiElements/Post";
import ticketsData from "../DummyData/tickets.json";
import PostsGrid from "../Components/uiElements/PostsGrid";

const Cars = () => {
  const renderFirstSevenWords = (text) => {
    const words = text.split(" ");
    const firstSevenWords = words.slice(0, 7).join(" ");
    return firstSevenWords;
  };
  return (
    <>
      <CommonHeader
        title="حجز تذاكر الطيران"
        description="حجز تذاكر الطيران الدولية والمحلية بكل سهولة وأفضل الأسعار"
        btnText="احجز الآن"
        to="#tickets"
        landingBg="../src/assets/images/tickets/plane.jpg"
        isneedBtn={true}
      />
      <PostsGrid id="tickets">
        {ticketsData.map((car, index) => {
          return (
            <Post
              key={index}
              title={car.title}
              imageSrc={car.imageSrc}
              description={renderFirstSevenWords(car.description) + "..."}
              to={`/tickets/${car.id}`}
            />
          );
        })}
      </PostsGrid>
    </>
  );
};

export default Cars;
