import {useEffect, useState} from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search"

const API_KEY = import.meta.env.VITE_API_KEY

export function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = (search, type) => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
          if (data.Search) {
            const formattedMovies = data.Search.map(movie => ({
              title: movie.Title,
              year: movie.Year,
              id: movie.imdbID,
              type: movie.Type,
              poster: movie.Poster
            }));

            setMovies(formattedMovies);
          } else {
            setMovies([]);
          }
        })
        .catch(error => {
          setMovies([]);
          console.error("Fetch error:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }

  const handleSearch = (search, type) => {
    setMovies([])
    search = search.trim();
    if (search === '') {
      search = 'severance'
    }
    getMovies(search, type);
  }

  useEffect(() => {
    getMovies("severance");
  }, [])


  return (
      <main className='min-h-screen flex flex-col justify-start p-5'>
        <Search handleSearch={handleSearch}/>
        {isLoading ?
            <Preloader/> :
            <Movies movies={movies}/>
        }
      </main>
  );
}
