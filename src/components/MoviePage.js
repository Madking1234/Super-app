import React, { useEffect, useState } from "react";
import "./MoviePage.css";

function MoviePage({ movieCategories }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "403607ab07msh8fc31773d3b13cbp19e255jsnd6135690f409",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    const fetchMovies = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${movieCategories}&year=2020`,
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  });
  return (
    <div>
      <p className="movie-categories">{movieCategories}</p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              <img
                src={movie?.primaryImage?.url}
                style={{
                  objectFit: "cover",
                  width: "20vw",
                  height: "15vh",
                  borderRadius: "12px",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviePage;
