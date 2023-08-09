import "./CardBanner.css";
import React from "react";

type CardBannerProps = {
  imgUrl: string;
  title: string;
  price: number;
  recommended?: string;
};

function CardBanner({ imgUrl, title, price, recommended }: CardBannerProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="carousel-item mx-auto w-72 card_top">
      <div className="card w-96  shadow-xl bg-red-700 rounded-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{title}</h2>
        </div>
        <figure className="px-10 figure">
          <img
            className="w-4/5 border-red-400 border-8 h-40"
            src={imgUrl}
            alt={title}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{formatPrice(price || 0)}</h2>
          <p className="text-white font-extralight text-sm">{recommended}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBanner;
