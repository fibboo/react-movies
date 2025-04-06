import React from 'react';
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

export class Main extends React.Component {
  state = {
    movies: [],
    isFound: true,
  }

  getMovies = (search, type) => {
    console.log(search, type)
    let url = `http://www.omdbapi.com/?apikey=d5159d25&s=${search}`
    if (type) {
      url += `&type=${type}`
    }
    fetch(url)
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

            this.setState({movies: formattedMovies, isFound: true});
          } else {
            this.setState({movies: [], isFound: false});
          }
        })
        .catch(error => {
          this.setState({movies: []});
          console.error("Fetch error:", error);
        });

  }

  componentDidMount() {
    setTimeout(() => {
      this.getMovies("severance")
    }, 2000);
  }

  handleSearch = (search, type) => {
    this.setState({movies: []})
    search = search.trim();
    if (search === "") {
      search = 'severance'
    } else if (search.length < 3) {
      this.setState({isFound: false})
      return
    }
    this.getMovies(search, type);
  }

  render() {
    return (
        <main className='container content'>
          <Search handleSearch={this.handleSearch}/>
          {this.state.movies.length > 0 ?
              <Movies movies={this.state.movies}/>
              :
              !this.state.isFound ?
                  <h4 className='not-found'>Movies not found!</h4> :
                  <Preloader/>
          }
        </main>
    )
  }
}