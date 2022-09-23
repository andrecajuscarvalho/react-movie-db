import Movie from "./Movie";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Movies = ({ num_displayed_results, movies, query }) => {
  return (
    <>
      <Container>
        <Row>
          <h1>Movies</h1>
        </Row>
        <br></br>
        <Row md="auto">
          {movies.length > 0 &&
            movies.slice(0, num_displayed_results).map((movie) => (
              <Col key={movie.id}>
                <Link className="nav-link" to={`/movies/${movie.id}/`}>
                  <Movie {...movie} />
                </Link>
              </Col>
            ))}
          {movies.length === 0 ? (
            <Alert variant="dark">
              There are no <b>movies</b> with the title <b>{query}</b>!
            </Alert>
          ) : null}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Movies;
