import Slider from "../Slider/Slider";
import CardBanner from "../CardBanner/CardBanner";
import React from "react";
import "./MenuSlider.css";
import { IFood } from "../data/food";

export type FoodProps = {
  imgUrl: string;
  title: string;
  price: number;
  food: IFood[];
};

function MenuSlider({ imgUrl, title, price, food }: FoodProps) {
  const [sliderOptions, setSliderOptions] = React.useState({
    perPage: 4,
  });

  React.useEffect(() => {
    function updateSliderOptions() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setSliderOptions({ perPage: 4 });
      } else if (screenWidth >= 1024) {
        setSliderOptions({ perPage: 3 });
      } else if (screenWidth >= 768) {
        setSliderOptions({ perPage: 2 });
      } else {
        setSliderOptions({ perPage: 1 });
      }
    }

    window.addEventListener("resize", updateSliderOptions);

    updateSliderOptions();

    return () => {
      window.removeEventListener("resize", updateSliderOptions);
    };
  }, []);

  return (
    <div>
      <div className="menu_section mt-24" id="menu">
        <div className="top_menu text-center ">
          <h1 className="text-3xl text-slate-800 font-semibold mb-4">
            Hidangan Kami
          </h1>
          <div className="w-10 my-2 mb-8 h-px bg-rose-700 mx-auto"></div>
        </div>
        <div className="splider__card mx-auto w-11/12 container mb-12">
          <Slider options={sliderOptions}>
            {food.map((food) => (
              <CardBanner
                key={food.foodId}
                imgUrl={food.imgUrl}
                title={food.title}
                price={food.price || 0}
                recommended={food.recommended}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MenuSlider;
