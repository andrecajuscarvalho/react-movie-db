import Movie from "../components/Movie/Movie";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import {
  API_POPULAR_MOVIES,
  API_SEARCH_MOVIES,
} from "../endpoins/paths/Movies";

function Movies() {
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
    fetch(API_SEARCH_MOVIES + searchVal)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    // empty searchVal after search
    setSearchVal("");
  };

  return (
    <>
      <Search
        pathnameVal="/"
        searchVal={searchVal}
        placeholderVal="search for moviews"
        actionOnSubmit={actionOnSubmit}
        setSearchVal={setSearchVal}
      />
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.slice(0, 5).map((movie) => (
              <Col>
                <Link className="nav-link" to={`/movie/${movie.id}/`}>
                  <Movie key={movie.id} {...movie} />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Movies;
