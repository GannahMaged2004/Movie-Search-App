import React ,  {useState} from "react";


// SearchBar component 
// searchMovie state is used to store the search query entered by the user
// onSearch function is called when the user submits the search query
// handleSubmit function is called when the user submits the search query
// handleSubmit function prevents the default form submission and calls the onSearch function with the search query entered by the user

const SearchBar = ({onSearch}) => {
    const [searchMovie, setSearchMovie] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchMovie.trim() === "")
            return;

        onSearch(searchMovie);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-4">
            <input 
            className="form-control me-2"
            type="search"
            placeholder="Search for a Movie..."
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
