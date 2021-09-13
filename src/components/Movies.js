import React from 'react';
import { movies } from '../data';

/*
 {
    title: 'Jack Reacher: Never Go Back',
    time: 118,
    genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller']
  }
*/

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h4>{movie.title}</h4>
          <p>Running time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
        
    </div>
  );
};

export default Movies;
