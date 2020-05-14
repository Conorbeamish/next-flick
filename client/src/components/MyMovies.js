import React, { useState, useEffect, useContext } from 'react';
import {CurrentUserContext} from "../contexts/CurrentUser";
import useResults from "../hooks/useResults";
import {apiCall} from "../utils/api";
import useError from '../hooks/useError';

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
            {listType !== "watchlist" &&             
                <button onClick={handleClick} name="watchlist">Go to my watch list...</button>
            }
            {listType !== "seenlist" && 
                <button onClick={handleClick} name="seenlist">Go to my seen list...</button>
            }
        </div>
    );
}
 
export default SavedMovies;