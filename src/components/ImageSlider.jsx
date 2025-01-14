import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidestoShow: 1,
    slidestoScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="w-full">
      <img className="w-full" src="/images/slider1.jpg" alt="" />
      <img className="w-full" src="/images/slider2.jpg" alt="" />
      <img className="w-full" src="/images/slider3.jpg" alt="" />
      <img className="w-full" src="/images/slider4.jpg" alt="" />
    </Slider>
  );
};

export default ImageSlider;
