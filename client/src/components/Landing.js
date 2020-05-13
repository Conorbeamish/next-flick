import React from 'react';
import Search from "./Search"

const Landing = (props) => {
    return (
        <div>
            <h1>Next Flick</h1>
            <Search history={props.history}/>
        </div>
    );
}
 
export default Landing;