import React from "react";
import MovieCard from "./MovieCard";



// Here is the code for the movie list
// It will display all the movies in a grid format
// If no movies are found, it will display a message

const MovieList = ({ movies }) => {
    if(!movies || movies.length === 0) 
        return
    <p className="text-center text-danger">Movie not found.</p>;


    return (
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-3 mb-4" key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
