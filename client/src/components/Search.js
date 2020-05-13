import React, {useState} from 'react';
import {apiCall} from "../utils/api";
import useResults from "../hooks/useResults";
import useError from "../hooks/useError";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const {results, setResults, clearResults} = useResults();
    const {error, addError, removeError,} = useError();
    const handleSubmit = (e) => {
        e.preventDefault()
        apiCall("get", `/api/search/?query=${query}`)
        .then(res => {
            setResults(res);
        })
        .catch(err => addError(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
            <button type="submit">
                Search
            </button>
        </form> 
    );
}
 
export default Search;