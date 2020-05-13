import React, {useState} from 'react';
import {apiCall} from "../utils/api";
import useResults from "../hooks/useResults";
import useError from "../hooks/useError";
import MovieList from "./MovieList";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const {results, setResults, clearResults} = useResults();
    const {error, addError, removeError,} = useError();
    const handleSubmit = (e) => {
        e.preventDefault()
        apiCall("get", `/api/search/?query=${query}`)
        .then(res => {
            setResults(res.results);
        })
        .catch(err => addError(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <button type="submit">
                Search
            </button>
            </form> 
            {results && <MovieList movies={results}/>}
        </div>
    );
}
 
export default Search;