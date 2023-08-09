import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";

type SliderProps = {
  children: React.ReactNode;
  options: object;
};

function Slider({ children, options }: SliderProps) {
  return (
    <div>
      <Splide options={options}>
        {React.Children.map(children, (child, index) => (
          <SplideSlide key={index}>{child}</SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
export default Slider;
