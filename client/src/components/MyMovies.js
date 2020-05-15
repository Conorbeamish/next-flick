import React, { useState, useEffect, useContext } from 'react';
import {CurrentUserContext} from "../contexts/CurrentUser";
import useResults from "../hooks/useResults";
import {apiCall} from "../utils/api";
import useError from '../hooks/useError';
import MovieList from './MovieList';
import {Link} from "react-router-dom";
 
const SavedMovies = (props) => {
    const [listType, setListType] = useState("");
    const [seenList, setSeenList] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const {currentUser} = useContext(CurrentUserContext)
    const {results, setResults, clearResults} = useResults();
    const {addError, removeError} = useError();
    
    const handleClick = (e) => {
        setListType(e.target.name);
    }

    useEffect(() => {
        const id = currentUser.user.id;
        apiCall("get", `api/users/${id}/movies`).then(res =>{
            //Take the info nested object and spread with response
            const extractInfo = res.map(movie => {
                movie = {...movie, ...movie.info}
                delete movie.info
                return movie;
            })
            const watch = extractInfo.filter(movie => movie.watched == false);
            const seen = extractInfo.filter(movie => movie.watched == true);
            setResults(extractInfo);
            setWatchList(watch);
            setSeenList(seen);
        }).catch(err => {
            addError(err)
        })
    }, [])
    
    return (
        <div>
            <h3>My Movies</h3>
            {listType == "Watch List" && 
                <div>
                    <button onClick={handleClick} name="Seen List">Go to my seen list...</button>
                    <MovieList saved={true} movies={watchList} title={listType}/>
                </div>
            }
            {listType == "Seen List" &&
                <div>
                    <button onClick={handleClick}  name="Watch List">Go to my watch list...</button>
                    <MovieList saved={true} movies={seenList} title={listType}/>
                </div>
            }
            {listType == "" && 
                <div>
                    <button onClick={handleClick}  name="Watch List">Go to my watch list...</button>
                    <button onClick={handleClick} name="Seen List">Go to my seen list...</button>
                </div>
            }
        </div>
    );
}
 
export default SavedMovies;