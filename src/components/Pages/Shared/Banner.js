import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="img-gradient w-full">
          <img
            src="https://www.davisadagency.com/wp-content/uploads/2017/04/lawyer-header-image-1024x680.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-96 top-1/2">
          <h1 className="text-center text-4xl text-yellow-600 font-bold">
            Emergency Service <br />
            24 Haours A Day, 7 Days A Week
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="img-gradient carousel-item relative w-full">
          <img
            src="https://www.youngmoorelaw.com/wp-content/uploads/2022/06/courthouse-columns-shutterstock_1459669157-scaled.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-96 top-1/2">
          <h1 className="text-center text-4xl text-yellow-600 font-bold">
            Emergency Service <br />
            24 Haours A Day, 7 Days A Week
          </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
