import React from 'react';
import MovieCard from "./MovieCard"
const MovieList = (props) => {

    const movieList = props.movies.map(movie => {
        return(<MovieCard {...movie} key={movie.id}/>)
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>{movieList}</div>
        </div>
    );
}
 
export default MovieList;