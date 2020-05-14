import React from 'react';
import {Link} from "react-router-dom";


const Landing = (props) => {
    return (
        <div>
            <h1>Next Flick</h1>
            <Link to="/search">
                Search
            </Link>
            <Link to="/mymovies">
                My Movies
            </Link>
        </div>
    );
}
 
export default Landing;