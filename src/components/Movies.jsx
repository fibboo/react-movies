import React from 'react';

import {Movie} from "./Movie";

export function Movies(props) {
  return (
        <div className="movies">
          {props.movies.map(movie => (<Movie key={movie.id} {...movie} />))}
        </div>
  );
}
