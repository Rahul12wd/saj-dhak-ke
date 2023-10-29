import React from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <Slider {...settings}>
            <div className="slider-item">
              <img
                src="./src/assets/poster3.png"
                className="slider-Img"
                alt=""
              />
            </div>
            <div className="slider-item">
              <img
                src="./src/assets/poster2.png"
                className="slider-Img"
                alt=""
              />
            </div>
            <div className="slider-item">
              <img
                src="./src/assets/poster1.png"
                className="slider-Img"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
