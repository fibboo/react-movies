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

  searchChange = (event) => {
    const value = event.target.value;
    this.setState({search: value});
    if (!value) {
      this.props.handleSearch(value, this.state.type);
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
        <div className='flex flex-col gap-4 mb-4'>
          <div className="flex items-center border border-slate-600 rounded overflow-hidden">
            <input
                className="bg-transparent flex-grow px-4 py-2 focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                value={this.state.search}
                onChange={this.searchChange}
                onKeyDown={this.handleKeyDown}
            />
            <button
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 flex items-center justify-center"
                onClick={this.searchMovies}
            >
              <span className="material-icons">search</span>
            </button>

          </div>

          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2">
              <input
                  className='form-radio text-indigo-600'
                  type="radio"
                  name="type"
                  value=""
                  checked={this.state.type === ''}
                  onChange={this.filterChange}/>
              <span>All</span>
            </label>

            <label className="inline-flex items-center gap-2">
              <input
                  className='form-radio text-indigo-600'
                  type="radio"
                  name="type"
                  value="movie"
                  checked={this.state.type === 'movie'}
                  onChange={this.filterChange}/>
              <span>Movies only</span>
            </label>

            <label className="inline-flex items-center gap-2">
              <input
                  className='form-radio text-indigo-600'
                  type="radio"
                  name="type"
                  value="series"
                  checked={this.state.type === 'series'}
                  onChange={this.filterChange}/>
              <span>Series only</span>
            </label>
          </div>
        </div>
    );
  }
}