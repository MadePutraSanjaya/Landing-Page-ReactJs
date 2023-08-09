import "./CardGroup.css";
import Slider from '../Slider/Slider';
import Card from '../CardContent/CardContent';
import React from "react";
import { IFood } from '../data/food';

type CardGroupProps = {
  imgUrl: string;
  title: string;
  price: number;
  food: IFood[];
  description: string;
};

function CardGroup({
  imgUrl,
  title,
  price,
  food,
  description,
}: CardGroupProps) {
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
      <div className="section_special py-20">
        <div className="top_special_food text-center">
          <h1 className="text-3xl text-red-700 font-semibold">
            Special Hari Ini
          </h1>
          <div className="w-10 my-2 mb-8 h-px bg-rose-700 mx-auto"></div>
        </div>

        <div className="splider__card mx-auto w-11/12 container mb-12">
          <Slider options={sliderOptions}>
            {food.map((food) => (
              <Card
                key={food.foodId}
                imgUrl={food.imgUrl}
                title={food.title}
                price={food.price || 0}
                description={food.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default CardGroup;
