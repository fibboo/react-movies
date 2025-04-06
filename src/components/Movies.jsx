import React from 'react';

import {Movie} from "./Movie";

export function Movies(props) {
  const movies = props.movies;
  return (
      <div className="movies">
        {movies.length > 0 ?
            movies.map(movie => (<Movie key={movie.id} {...movie} />)) :
            <h4 className='not-found'>Movies not found!</h4>}
      </div>
  );
}
