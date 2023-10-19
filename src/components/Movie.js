import React, { useEffect, useState } from "react";

function Movie() {
  const [movie, setMovie] = useState([]);
  const url =
    "https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "403607ab07msh8fc31773d3b13cbp19e255jsnd6135690f409",
      "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  async function fetchMovieData() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setMovie(result.results);
      console.log(movie);
    } catch (error) {
      console.error(error);
    }
  }
  return <div>Movie</div>;
}

export default Movie;
