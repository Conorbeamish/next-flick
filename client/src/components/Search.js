import React, {useState, useEffect} from 'react';
import {apiCall} from "../utils/api";
import useResults from "../hooks/useResults";
import useError from "../hooks/useError";
import MovieList from "./MovieList";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1)
    const {results, setResults, clearResults} = useResults();
    const {error, addError, removeError} = useError();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        removeError();
        if(!query){
            addError("Please search for a movie")
        } else {
            apiCall("get", `/api/search/?query=${query}&page=${page}`)
            .then(res => {
                setResults(res.results);
            })
            .catch(err => addError(err))
        }
    }
    const title = "Search Results"
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <button type="submit">
                Search
            </button>
            </form> 
            {results && <MovieList watched={false} movies={results} title={title} />}
        </div>
    );
}
 
export default Search;