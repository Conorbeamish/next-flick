import React, { useState, useEffect, useContext } from 'react';
import {CurrentUserContext} from "../contexts/CurrentUser";
import useResults from "../hooks/useResults";
import {apiCall} from "../utils/api";
import useError from '../hooks/useError';
import MovieList from './MovieList';

const SavedMovies = (props) => {
    const [listType, setListType] = useState("");
    const {currentUser} = useContext(CurrentUserContext)
    const {results, setResults, clearResults} = useResults();
    const {addError, removeError} = useError();
    const handleClick = (e) => {
        setListType(e.target.name)
    }

    useEffect(() => {
        const id = currentUser.user.id;
        apiCall("get", `api/users/${id}/movies`).then(res =>{
            setResults(res)
        }).catch(err => {
            addError(err)
        })
    }, [])
    return (
        <div>
            <h3>My Movies</h3>
            {listType !== "Watch List" &&             
                <button onClick={handleClick} name="Watch List">Go to my watch list...</button>
            }
            {listType !== "Seen List" && 
                <button onClick={handleClick} name="Seen List">Go to my seen list...</button>
            }
            {/* {results && <MovieList movies={results} title={listType}/>} */}
        </div>
    );
}
 
export default SavedMovies;