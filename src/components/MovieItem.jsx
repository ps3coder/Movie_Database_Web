import React from "react";
import Rating from '@mui/material/Rating';

const MovieItem = ({ movie }) => (
    <div className="movie-item">
        <div className="movie-poster">
            <img src={movie.image} alt="alt" />
        </div>
        <div className="movie-details">
            <h2>{movie.movie}</h2>
            <div className="rating">
                <Rating name="read-only" value={movie.rating} readOnly max={10} />
                <span>{movie.rating}</span>
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                    Details
                </a>
            </div>
        </div>
        <div className="info-icon">
            <a href={movie.imdb_url}>ℹ️</a>
        </div>
    </div>
);

export default MovieItem;
