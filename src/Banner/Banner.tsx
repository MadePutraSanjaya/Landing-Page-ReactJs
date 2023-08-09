import React from "react";
import bannerIkan from "../Assets/BannerIkan.jpg";
import Button from "../Button/Button";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container mx-auto" id='home'>
        <div className="top_banner md:columns-1 lg:columns-2 sm:columns-1 ">
          <div className="top_banner_image">
            <img src={bannerIkan} alt="" />
          </div>
          <div className="top_banner_text relative lg:top-52 md:top-4 lg:mx-auto md:mx-auto sm:right-8 w-11/12">
            <h1 className="text-4xl text-rose-700 font-extrabold	">
              Ikan Bakar <span className="text-gray-950	">Khas Gianyar</span>
            </h1>
            <p className="text-slate-600">
              Ikan segar yang langsung di bakar mendadak menciptakan ciri khas{" "}
              <br />
              rasa Gianyar sendiri.
            </p>
            <div className="top_banner_button flex mt-4">
              <Button
                outline
                className=" outline-rose-700 me-4 text-rose-700  hover:bg-rose-700 hover:text-white"
              >
                Order Sekarang
              </Button>
              <Button className="outline-white bg-rose-700 text-white hover:bg-rose-800">
                Lihat Menu
              </Button>
            </div>
            <div className="top_banner_rating flex mt-12 text-slate-500	">
              <div className="customer me-4 inline">
                <h5 className="text-2xl">500+</h5>
                <p>Pelanggan</p>
              </div>
              <div className="happy_customer me-4 inline">
                <h5 className="text-2xl">450+</h5>
                <p>Kepuasan</p>
              </div>
              <div className="rating inline">
                <h5 className="text-2xl">401+</h5>
                <p>Ulasan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
