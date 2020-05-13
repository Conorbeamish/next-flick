import React from 'react';

const MovieCard = (props) => {
    const {title} = props
    return ( 
        <h4>{title}</h4>
    );
}
 
export default MovieCard;