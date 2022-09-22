import Welcome from "../components/Welcome/Welcome";
import Movie from "../components/Movie/Movie";
import Serie from "../components/Serie/Serie";
import Person from "../components/Person/Person";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import getPopularMovies from "../endpoins/movies/getPopularMovies";
import getPopularSeries from "../endpoins/series/getPopularSeries";
import getPopularPeople from "../endpoins/people/getPopularPeople";
import getSearchedMovies from "../endpoins/movies/getSearchedMovies";
import getSearchedSeries from "../endpoins/series/getSearchedSeries";
import getSearchedPeople from "../endpoins/people/getSearchedPeople";

function Home() {
  const num_displayed_results = 5;
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [people, setPeople] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getPopularMovies(setMovies);
    getPopularSeries(setSeries);
    getPopularPeople(setPeople);
  }, []);

  const actionOnSubmit = (e) => {
    e.preventDefault();
    getSearchedMovies(setMovies, searchVal);
    getSearchedSeries(setSeries, searchVal);
    getSearchedPeople(setPeople, searchVal);
    setSearchVal("");
  };

  return (
    <>
      <Welcome />
      <Search
        pathnameVal="/"
        searchVal={searchVal}
        placeholderVal="search for movies"
        actionOnSubmit={actionOnSubmit}
        setSearchVal={setSearchVal}
      />
      <Container>
        <Row>
          <h1>Movies</h1>
        </Row>
        <br></br>
        <Row>
          {movies.length > 0 &&
            movies.slice(0, num_displayed_results).map((movie) => (
              <Col>
                <Link className="nav-link" to={`/movies/${movie.id}/`}>
                  <Movie key={movie.id} {...movie} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>

      <Container>
        <hr></hr>
        <Row>
          <h1>Series</h1>
        </Row>
        <br></br>
        <Row>
          {series.length > 0 &&
            series.slice(0, num_displayed_results).map((serie) => (
              <Col>
                <Link className="nav-link" to={`/series/${serie.id}/`}>
                  <Serie key={serie.id} {...serie} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>

      <Container>
        <hr></hr>
        <Row>
          <h1>People</h1>
        </Row>
        <br></br>
        <Row>
          {people.length > 0 &&
            people.slice(0, num_displayed_results).map((person) => (
              <Col>
                <Link className="nav-link" to={`/people/${person.id}/`}>
                  <Person key={person.id} {...person} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>
    </>
  );
}

export default Home;
