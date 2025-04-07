import {useState} from "react";


export function Search({handleSearch}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const searchMovies = (event) => {
    event.preventDefault();
    if (search.length > 0) {
      handleSearch(search, type);
    }
  }

  const searchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (!value) {
      handleSearch(value, type);
    }
  }

  const searchKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(event);
    }
  }

  const filterChange = (event) => {
    const value = event.target.value;
    setType(value);
    handleSearch(search, value);
  }

  return (
      <div className='flex flex-col gap-4 mb-4'>
        <div className="flex items-center border border-slate-600 rounded overflow-hidden">
          <input
              className="bg-transparent flex-grow px-4 py-2 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              value={search}
              onChange={searchChange}
              onKeyDown={searchKeyDown}
          />
          <button
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 flex items-center justify-center"
              onClick={searchMovies}
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
                checked={type === ''}
                onChange={filterChange}/>
            <span>All</span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input
                className='form-radio text-indigo-600'
                type="radio"
                name="type"
                value="movie"
                checked={type === 'movie'}
                onChange={filterChange}/>
            <span>Movies only</span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input
                className='form-radio text-indigo-600'
                type="radio"
                name="type"
                value="series"
                checked={type === 'series'}
                onChange={filterChange}/>
            <span>Series only</span>
          </label>
        </div>
      </div>
  );
}
