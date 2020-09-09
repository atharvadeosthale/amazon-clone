import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          className="home__image"
        />
        <div className="home__row"></div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
};

export default Home;
