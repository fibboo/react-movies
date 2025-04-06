import React from "react";


export class Search extends React.Component {
  state = {
    search: '',
    type: ''
  }

  searchMovies = (event) => {
    event.preventDefault();
    const {search, type} = this.state;
    if (search.length > 0) {
      this.props.handleSearch(search, type);
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.searchMovies(event);
    }
  }

  filterChange = (event) => {
    this.setState(() => ({[event.target.name]: event.target.value}), () => {
      this.props.handleSearch(this.state.search, this.state.type);
    })
  }

  render() {
    return (
        <div className='row'>
          <div className="input-field ">
            <input
                className="validate"
                type="search"
                name="search"
                placeholder="Search"
                value={this.state.search}
                onChange={event => this.setState({search: event.target.value}) }
                onKeyDown={this.handleKeyDown}
            />

            <div>
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value=""
                    checked={this.state.type === ''}
                    onChange={this.filterChange}/>
                <span>All</span>
              </label>
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value="movie"
                    checked={this.state.type === 'movie'}
                    onChange={this.filterChange}/>
                <span>Movies only</span>
              </label>
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value="series"
                    checked={this.state.type === 'series'}
                    onChange={this.filterChange}/>
                <span>Series only</span>
              </label>
            </div>

            <button className="btn search-btn" onClick={this.searchMovies}>Search</button>
          </div>
        </div>
    );
  }
}