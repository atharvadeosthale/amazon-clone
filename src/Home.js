import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import Checkout from "./Checkout";
import "./Home.css";
import { sizing } from "@material-ui/core";
import Product from "./Product";

const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          className="home__image"
        />
        <div className="home__row" style={{ marginTop: "300px" }}>
          <Product
            id="12849"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
          <Product
            id="3534345"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="24242"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
          <Product
            id="23553647"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
          <Product
            id="359473"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4839274"
            title="The Most helpful book in the world, this book gives you basic knowledge about life (ofcourse if you do not know)."
            price={29.99}
            image={`https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg`}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
