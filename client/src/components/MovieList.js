import React from 'react';
import MovieCard from "./MovieCard"
const MovieList = (props) => {

    const movieList = props.movies.map(movie => {
        return(<MovieCard 
            watched={movie.watched || false} 
            saved={props.saved || false} 
            key={movie.id}
            {...movie}
        />)
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>{movieList}</div>
        </div>
    );
}
 
export default MovieList;