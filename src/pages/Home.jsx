import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../api';
import '../styles/App.css'; 
import { AiOutlineLoading3Quarters } from "react-icons/ai"


// In the Home component, I'm rendering the SearchBar and MovieList components.
// I'm also using the searchMovies function from the api.js file to fetch the movie data.
// I'm also using the useState hook to manage the state of the movies and loading.
// I'm also using the AiOutlineLoading3Quarters icon from the react-icons library to show a loading spinner.
// I'm also using the setError function to show an error message if there is any error while fetching the data.
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchMovie) => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchMovies(searchMovie);
            if (data.Response === "True") {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.Error);
            }
        } catch (err) {
            setError("Something went wrong, please try again later...");
        } finally {
            setLoading(false);
        }
    };

    // I'm rendering the SearchBar and MovieList components with the handleSearch function as a prop.
    // I'm using bootstrap classes to style the components.
    // I used the error function to convey the error message to the user.

    return (
        <div className="container mt-5">
            <h1 className="mb-4 app-title text-info" >Gannah's Movie Search App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && (
                <div className="text-center mt-5 text-secondary">
                    <AiOutlineLoading3Quarters />
                    <h3>Loading...</h3>
                </div>
            )}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
