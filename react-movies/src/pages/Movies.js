import Movie from "../components/Movie/Movie";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  API_KEY +
  "&language=en-US";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  API_KEY +
  "&language=en-US&include_adult=false&query=";

function Movies() {
  // default there are no movies
  const [movies, setMovies] = useState([]);
  // sarch state
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

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
    navigate({ pathname: "/", search: `&query=${e.target.value}` });
    setSearchVal(e.target.value);
  };

  return (
    <>
      <Container>
        <form onSubmit={actionOnSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="search by movie name"
              aria-label="movie name"
              aria-describedby="basic-addon1"
              value={searchVal}
              onChange={actionOnChange}
            />
          </InputGroup>
        </form>
      </Container>
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
