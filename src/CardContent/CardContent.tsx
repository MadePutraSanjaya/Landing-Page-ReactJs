import React from "react"
import Button from '../Button/Button';

type CardContentProps = {
  imgUrl: string;
  title: string;
  description: string;
  price: number;
}

function Card({imgUrl, title, description, price}: CardContentProps) {
   const formatPrice = (price: number) => {
     return price.toLocaleString("id-ID", {
       style: "currency",
       currency: "IDR",
     });
   };

  return (
    <div>
      <div className="carousel-item mx-auto w-72 mt-6">
        <div className="card w-72 shadow-xl bg-red-700 pb-12 h-80">
          <div className="card-text justify-end card-actions relative top-12 right-8">
            <h2 className="card-title text-white text-sm">{formatPrice(price)}</h2>
          </div>
          <figure className=" relative right-24 bottom-8">
            <img
              className="rounded-full w-7/12 h-40"
              src={imgUrl}
              alt={title}
            />
          </figure>
          <div className="card-mid px-8">
            <h2 className="card-title text-white">{title}</h2>
            <p className="text-white font-extralight text-sm">
              ({description})
            </p>
            <div className="card-actions justify-end pb-8 pt-2 ">
              <Button className=" bg-white text-red-700 hover:bg-slate-200">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card