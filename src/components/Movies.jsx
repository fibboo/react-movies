import React from 'react';
import { Movie } from "./Movie";

export function Movies(props) {
  const movies = props.movies;
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.length > 0 ?
        movies.map(movie =>
          (<Movie key={movie.id} {...movie} />)
        )
        :
        <h4 className='col-span-full text-center'>Movies not found!</h4>
      }
    </div>
  );
}