import React from "react";


export class Search extends React.Component {
  state = {
    search: '',
    type: ''
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const {search, type} = this.state;
    if (search.length > 0) {
      this.props.handleSearch(search, type);
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleOnClick(event);
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />

            <div className="movie-filter">
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value=""
                    checked={this.state.type === ''}
                    onChange={this.handleChange}/>
                <span>All</span>
              </label>
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value="movie"
                    checked={this.state.type === 'movie'}
                    onChange={this.handleChange}/>
                <span>Movies only</span>
              </label>
              <label>
                <input
                    className='with-gap'
                    type="radio"
                    name="type"
                    value="series"
                    checked={this.state.type === 'series'}
                    onChange={this.handleChange}/>
                <span>Series only</span>
              </label>
            </div>

            <button className="btn search-btn" onClick={this.handleOnClick}>Search</button>
          </div>
        </div>
    );
  }
}