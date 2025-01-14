import React from "react";
import { useParams } from "react-router-dom";
import { MoviesList } from "../config/MoviesList";

const DetailsPage = () => {
  const { id } = useParams();
  const movie = MoviesList.find((movie) => movie.id === parseInt(id));

  return (
    <div className="mt-20">
      <img src={movie.backgroundImg} className="w-full h-full" alt="" />

      <h1>{movie.title}</h1>
      <h1>{movie.description}</h1>
      <h1>{movie.subTitle}</h1>
    </div>
  );
};

export default DetailsPage;
