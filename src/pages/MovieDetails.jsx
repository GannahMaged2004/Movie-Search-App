import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api";
import "../styles/App.css"; 
import { AiOutlineLoading3Quarters } from "react-icons/ai"

// here i'm rendering the movie details page
// i'm using the useParams hook to get the id of the movie from the url
// i'm using the getMovieDetails function to get the movie details from the api
// i'm using the useState hook to keep track of the movie data and the loading state
// i'm using the useEffect hook to fetch the movie data when the component mounts



const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  // Here is the code for the loading state
  if (loading) {
    return (
      <p className="container mt-5 text-center">
        <AiOutlineLoading3Quarters />
        Loading...</p>
    );
  }

  return (
    <div className="container mt-3">
      <Link
        to="/"
        className="btn gradient-btn text-white mb-4"
      >
        Go Back
      </Link>

{/* Here is the cards for the movie details using bootstrap */}
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8 text-light">
          <h2 className="mt-3 text-info">{movie.Title} ({movie.Year})</h2>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p>{movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className="text-warning"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
