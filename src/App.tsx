import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import CardGroup from "./CardGroup/CardGroup";
import AboutUs from "./AboutUs/AboutUs";
import FourthSectionBanner from "./Banner/FourthSectionBanner";
import MenuSlider from "./MenuSlider/MenuSlider";
import BannerReservation from "./Banner/BannerReservation";
import Location from "./Location/Location";
import Footer from "./Footer/Footer";
import { IFood } from "./data/food";


 type FoodProps = {
   imgUrl: string;
   title: string;
   price: number;
   description: string;
   food: IFood[];
 };
function App({ imgUrl, title, price, food, description }: FoodProps) {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CardGroup
        imgUrl={imgUrl}
        title={title}
        price={price}
        food={food}
        description={description}
      />
      <AboutUs />
      <FourthSectionBanner />
      <MenuSlider imgUrl={imgUrl} title={title} price={price} food={food} />
      <BannerReservation />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
