import Movie from "./Movie";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Movies = ({ num_displayed_results, movies }) => {
  return (
    <>
      <Container>
        <Row>
          <h1>Movies</h1>
        </Row>
        <br></br>
        <Row>
          {movies.length > 0 &&
            movies.slice(0, num_displayed_results).map((movie) => (
              <Col key={movie.id}>
                <Link className="nav-link" to={`/movies/${movie.id}/`}>
                  <Movie {...movie} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Movies;
