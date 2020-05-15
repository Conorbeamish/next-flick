import React, {useContext} from 'react';
import {apiCall} from "../utils/api"
import {CurrentUserContext} from "../contexts/CurrentUser";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
    const {currentUser} = useContext(CurrentUserContext)

    const handleSave = () => {
        const id = currentUser.user.id
        apiCall("post", `/api/users/${id}/movies`, {info: props})
    }

    const {title, saved, watched} = props
    return ( 
        <div>
            <h4>{title}</h4>
            {(saved && watched) &&
                <button>
                    Remove Movie
                </button>
            }
            {(saved && !watched) &&
                <div>
                    <button>Remove</button>
                    <button>I've Watched This Movie</button>
                </div> 
            }
            {(!saved && !watched) &&
                <div>
                    <button>Add to Seen List</button>
                    <button>Add to Watch List</button>
                </div>
            }
        </div>
    );
}
 
export default MovieCard;