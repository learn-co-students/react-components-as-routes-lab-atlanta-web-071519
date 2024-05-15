import React from 'react'

const MovieCard = (props) => {
    console.log(props)
    return(
        <div>
            {props.movie.title}
        </div>
    )
}

export default MovieCard