import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    // name: 'Benedict Cumberbatch',
    // movies: ['Doctor Strange', 'The Imitation Game', 'Black Mass']
    // yes it needs to be that specific text I don't care if you think it's ugly
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h4>{actor.name}</h4>
          <ul>
          {actor.movies.map((movie, index) =>
          <li key={index}>{movie}</li>)}
          </ul>
        </div>
      ))} 
    </div>
    // remember movie (in the li tag, hate this format) doesn't need anything else because 'movie'
    // is actually part of the array of actor.movies, which is an array of strings of movie titles
    // presumably you could also make it so that you can click each movie title and go to the movie page
    // but that's way more effort.
  );
};

export default Actors;
