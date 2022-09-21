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
import CustomFetch from "../endpoins/methods/CustomFetch";

function Movies() {
  const num_displayed_movies = 5;
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    CustomFetch({ endpoint_path: API_POPULAR_MOVIES, setter: setMovies });
  }, []);

  const actionOnSubmit = (e) => {
    e.preventDefault();
    CustomFetch({
      endpoint_path: API_SEARCH_MOVIES + searchVal,
      setter: setMovies,
    });
    setSearchVal("");
  };

  return (
    <>
      <Search
        pathnameVal="/"
        searchVal={searchVal}
        placeholderVal="search for movies"
        actionOnSubmit={actionOnSubmit}
        setSearchVal={setSearchVal}
      />
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.slice(0, num_displayed_movies).map((movie) => (
              <Col>
                <Link className="nav-link" to={`/movies/${movie.id}/`}>
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
