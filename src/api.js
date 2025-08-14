import axios from "axios";

// This is the API key and base URL for the OMDb API.

const API_KEY = "fa411543"; 
const BASE_URL = "https://www.omdbapi.com/";


// This function is used to search for movies using the OMDb API.
export const searchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { apikey: API_KEY, s: query },
  });
  return response.data;
};

// This function is used to get the details of a movie.

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: { apikey: API_KEY, i: id },
  });
  return response.data;
};
