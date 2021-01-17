import React, { useState, useContext } from "react";
import "./styles.css";
import MovieList from "./MovieList";

import { MovieContext } from "./MovieContext";

export default function AddMovie() {
  const [title, settitle] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevmovie) => [...prevmovie, { title: title }]);
    settitle("");
  };
  return (
    <form onSubmit={addMovie}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
