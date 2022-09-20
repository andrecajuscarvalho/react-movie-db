import Movie from "../components/Movie";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  API_KEY +
  "&language=en-US";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  API_KEY +
  "&language=en-US&include_adult=false&query=";

function Home() {
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
  }, []);

  const actionOnSubmit = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + searchVal)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    // empty searchVal after search
    setSearchVal("");
  };

  const actionOnChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <Container>
        <form onSubmit={actionOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Movie name..."
            value={searchVal}
            onChange={actionOnChange}
          />
        </form>
      </Container>
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.slice(0, 5).map((movie) => (
              <Col>
                <Movie key={movie.id} {...movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
