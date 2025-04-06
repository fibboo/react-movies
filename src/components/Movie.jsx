export function Movie(movie) {
  return (
      <div className="card movie">
        <div className="card-image">
          {movie.poster === 'N/A' ?
              <img src={`https://placehold.co/275x400/455a64/b5d0e4?text=${movie.title}`} alt={movie.title}/> :
              <img src={movie.poster} alt={movie.title}/>
          }
        </div>
        <div className="card-content">
          <span className="movie-title">{movie.title}</span>
          <p>{movie.year} <span className='right'>{movie.type}</span></p>
        </div>
      </div>
  );
}