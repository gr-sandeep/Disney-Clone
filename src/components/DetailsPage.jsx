import React from "react";
import { useParams } from "react-router-dom";
import { MoviesList } from "../config/MoviesList";
import { IoPlayOutline } from "react-icons/io5";
import { MdAdd, MdOutlineMovieFilter } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

const DetailsPage = () => {
  const { id } = useParams();
  const movie = MoviesList.find((movie) => movie.id === parseInt(id));

  return (
    <div className="w-full h-[calc(100vh-150px)]">
      <img
        className="relative mt-24 rounded-md w-full h-full"
        src={movie.backgroundImg}
        alt={movie.title}
      />
      <div className="absolute bottom-5 px-5 md:px-10 w-full md:w-[80%] lg:w-[60%] xl:w-1/2">
        <img
          src={movie.titleImg}
          alt={movie.title}
          className="w-full h-full mb-5"
        />
        <div className="flex items-center justify-start gap-5 mb-5">
          <button
            title="Play Movie"
            className="border cursor-pointer flex items-center gap-2 p-2 rounded font-semibold px-4 tracking-wider hover:bg-[#f9f9f9] hover:text-[#090b13]"
          >
            <IoPlayOutline fontSize={32} /> PLAY
          </button>
          <button
            title="Watch Trailer"
            className="border cursor-pointer flex items-center gap-2 p-2 rounded font-semibold px-4 tracking-wider hover:bg-[#f9f9f9] hover:text-[#090b13]"
          >
            <MdOutlineMovieFilter fontSize={32} /> TRAILER
          </button>

          <MdAdd
            fontSize={40}
            className="border-2 cursor-pointer rounded-full p-1 hover:bg-[#f9f9f9] hover:text-[#090b13]"
            title="Add to WatchList"
          />

          <HiOutlineUserGroup
            fontSize={40}
            className="border-2 cursor-pointer rounded-full p-1 hover:bg-[#f9f9f9] hover:text-[#090b13]"
            title="Group Notify"
          />
        </div>
        <h1 className="font-semibold pb-5">{movie.subTitle}</h1>
        <h1>{movie.description}</h1>
      </div>
      <p className="text-gray-500 font-semibold text-sm bottom-0 text-center">
        Developed by G R Sandeep 😎
      </p>
    </div>
  );
};

export default DetailsPage;
