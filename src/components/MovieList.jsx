import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, isGridView }) => (
    <div className={isGridView ? "movie-list grid-view" : "movie-list list-view"}>
        {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
    </div>
);

export default MovieList;
