import React from "react";
import nextPage from "./nextPage.png";
import "./Movie.css";
import { useNavigate } from "react-router-dom";
import MoviePage from "./MoviePage";

function Movie() {
  const movieCategories = JSON.parse(
    window.localStorage.getItem("selectedCategoryNames")
  );
  console.log(movieCategories);
  const Navigate = useNavigate();
  const handleMain = (e) => {
    Navigate("/Main");
    e.preventDefault();
  };
  return (
    <div className="movie-page">
      <div className="tag-button">
        <p id="title">Super app</p>
        <div onClick={handleMain}>
          <img id="change-page" src={nextPage} alt="" />
        </div>
      </div>
      <p className="entertainment">Entertainment according to your choice</p>
      {movieCategories.map((movie) => (
        <MoviePage movieCategories={movie} />
      ))}
    </div>
  );
}

export default Movie;
