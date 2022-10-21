import React from 'react'
import MovieCard from "./MovieCard";

function MovieList({movies, text}) {
  return (
    <div>
      {movies
        .filter((val) => val?.name?.toLowerCase().includes(text.toLowerCase()))
        .map((el) => (
          <MovieCard movie={el} />
        ))}
         
       
       
    </div>
  );
}

export default MovieList