import React from "react";
import { Link } from "react-router-dom";



// This is the MovieCard component which will display the movie details in a card format.
// It takes in a prop called "movie" which is an object containing the details of the movie.
// The component will display the movie poster, title, year, and a button to view the details of the movie.
// The button will link to the movie details page using the imdbID of the movie.
// If the movie poster is not available, it will display a placeholder image.
// The MovieCard component is used in the MovieList component to display the list of movies.

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        className="card-img-top"
        alt={movie.Title}
      />
      <div className="card-body d-flex flex-column">
        <h5 clasAsName="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="btn gradient-btn mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
