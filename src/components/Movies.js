import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
        <h1>Movies Page</h1>

          { movies.map (movie => {
            return(
              <div>
                <h1>{movie.title}</h1>
                <p>{movie.time}</p>
                {movie.genres.map(genre => {
                  return(
                    <p>{genre}</p>
                  )
                })}
              </div>
            )
          })}

    </div>
  );
};

export default Movies;
