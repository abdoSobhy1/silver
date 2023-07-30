import CommonHeader from "../Components/CommonHeader";
import Post from "../Components/uiElements/Post";
import carData from "../DummyData/cars.json";
import carBg from "../assets/images/cars/cars.jpg";
import PostsGrid from "../Components/uiElements/PostsGrid";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Firebase";

import { useEffect, useState } from "react";

const Cars = () => {
  const renderFirstSevenWords = (text) => {
    const words = text.split(" ");
    const firstSevenWords = words.slice(0, 7).join(" ");
    return firstSevenWords;
  };

  const [cars, setCars] = useState([]);
  const getCarData = async () => {
    const snapShot = await getDocs(collection(db, "car-rental"));
    setCars(snapShot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getCarData();
  }, []);

  console.log(cars);

  return (
    <>
      <CommonHeader
        title="تأجير السيارات"
        description="
          تأجير سيارات مع سائق أو بدون سائق في أي مكان في العالم"
        btnText="احجز الآن"
        to="#cars"
        landingBg={carBg}
        isneedBtn={true}
      />
      <PostsGrid id="cars">
        {carData.map((car, index) => {
          return (
            <Post
              key={index}
              title={car.title}
              imageSrc={car.imageSrc}
              description={renderFirstSevenWords(car.description) + "..."}
              to={`/car-rental/${car.id}`}
            />
          );
        })}
      </PostsGrid>
    </>
  );
};

export default Cars;
