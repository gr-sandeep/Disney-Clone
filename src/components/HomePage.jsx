import React from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import Trending from "./Trending";
import NewDisney from "./NewDisney";
import Originals from "./Originals";

const HomePage = () => {
  return (
    <div className="h-full bg-cover bg-no-repeat bg-[url('/images/home-background.png')]">
      <div className="mt-20">
        <ImageSlider />
      </div>

      <div className="flex flex-col gap-10 py-10 px-20 sm:px-10 md:px-5">
        <Viewers />
        <Recommends />
        <Trending />
        <NewDisney />
        <Originals />
      </div>

      <span className="text-gray-500 font-semibold text-sm text-center">
        Developed by G R Sandeep 😎
      </span>
    </div>
  );
};

export default HomePage;
