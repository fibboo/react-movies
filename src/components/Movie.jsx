export function Movie(movie) {
  return (
      <div className="border border-slate-600 max-w-sm shadow-lg rounded-lg overflow-hidden">
        <img
            className="rounded-t-lg w-full h-128 object-cover object-center"
            src={movie.poster === 'N/A' ?
                `https://placehold.co/275x400/455a64/b5d0e4?text=${movie.title}` :
                movie.poster}
            alt={movie.title}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-between">
            <span>{movie.year}</span>
            <span>{movie.type}</span>
          </p>
        </div>
      </div>
  );
}