import React from "react";
import "./styles.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <h1>Hello CodeSandbox</h1>
      <MovieList />
      <AddMovie />
    </MovieProvider>
  );
}
