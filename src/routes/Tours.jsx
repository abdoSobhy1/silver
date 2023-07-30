import CommonHeader from "../Components/CommonHeader";
import Post from "../Components/uiElements/Post";
import toursData from "../DummyData/tickets.json";
import PostsGrid from "../Components/uiElements/PostsGrid";

const Tours = () => {
  const renderFirstSevenWords = (text) => {
    const words = text.split(" ");
    const firstSevenWords = words.slice(0, 7).join(" ");
    return firstSevenWords;
  };
  return (
    <>
      <CommonHeader
        title="تنظيم جولات سياحية"
        description="تنظيم جولات سياحية داخلية وخارجية بكل سهولة وأفضل الأسعار"
        btnText="احجز الآن"
        to="#tours"
        landingBg="../src/assets/images/tours/tourism.jpg"
        isneedBtn={true}
      />
      <PostsGrid id="tours">
        {toursData.map((tour, index) => {
          return (
            <Post
              key={index}
              title={tour.title}
              imageSrc={tour.imageSrc}
              description={renderFirstSevenWords(tour.description) + "..."}
              to={`/tours/${tour.id}`}
            />
          );
        })}
      </PostsGrid>
    </>
  );
};

export default Tours;
