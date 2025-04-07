import React from 'react';
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search"

const API_KEY = import.meta.env.VITE_API_KEY

export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  getMovies = (search, type) => {
    this.setState({loading: true});
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

            this.setState({movies: formattedMovies, loading: false});
          } else {
            this.setState({movies: [], loading: false});
          }
        })
        .catch(error => {
          this.setState({movies: [], loading: false});
          console.error("Fetch error:", error);
        });
  }

  componentDidMount() {
    this.getMovies("severance")
  }

  handleSearch = (search, type) => {
    this.setState({movies: []})
    search = search.trim();
    if (search === '') {
      search = 'severance'
    }
    this.getMovies(search, type);
  }

  render() {
    return (
        <main className='min-h-screen flex flex-col justify-start p-5'>
          <Search handleSearch={this.handleSearch}/>
          {this.state.loading ?
              <Preloader/>
              :
              <Movies movies={this.state.movies}/>
          }
        </main>
    )
  }
}
