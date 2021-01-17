import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

import "./styles.css";

export default function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
