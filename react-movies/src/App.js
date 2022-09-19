import './App.css';
import Movie from './components/Movie';
import React, { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY
const API_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en-US"
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=en-US&include_adult=false"

function App() {
  // default there are no movies
  const [movies, setMovies] = useState([]);
  // sarch state
  const [searchVal, setSearchVal] = useState("");

  // fetch from api
  useEffect(() => {
    fetch(API_POPULAR_MOVIES)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [])

  const actionOnSubmit = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + searchVal)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    setSearchVal("");
  }

  const actionOnChange = (e) => {
    setSearchVal(e.target.value);
  }

  return (<>
    <header>
      <form onSubmit={actionOnSubmit}>
        <input className='search' type="search"
          placeholder="Movie name..." value={searchVal}
          onchange={actionOnChange} />
      </form>
    </header>
    <div className='movie-list'>
      {movies.length > 0 &&
        movies.map((movie) =>
          <Movie key={movie.id} {...movie} />)}
    </div>
  </>);
}

export default App;
