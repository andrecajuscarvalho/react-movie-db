import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import getPersonMovieCredits from "../../../../../endpoins/people/getPersonMovieCredits";
import getPersonSerieCredits from "../../../../../endpoins/people/getPersonSerieCredits";
import Movie from "../../../Movies/Movie";
import Serie from "../../../Series/Serie";

const PersonCredits = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getPersonMovieCredits(setMovies, id);
    getPersonSerieCredits(setSeries, id);
  }, [id]);

  return (
    <>
      <Row>
        <Col>
          <h1>
            <b>Movies</b>
          </h1>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    <b>Number of movies:</b> {movies.length}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  {movies.length > 0 &&
                    movies.map((movie) => (
                      <Col sm={6} key={movie.id}>
                        <Link className="nav-link" to={`/movies/${movie.id}/`}>
                          <Movie
                            title={movie.title}
                            poster_path={movie.poster_path}
                            vote_average={movie.vote_average}
                          />{" "}
                        </Link>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <h1>
            <b>Series</b>
          </h1>
          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    <b>Number of Series:</b> {series.length}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  {series.length > 0 &&
                    series.map((serie) => (
                      <Col sm={6} key={serie.id}>
                        <Link className="nav-link" to={`/series/${serie.id}/`}>
                          <Serie
                            name={serie.name}
                            poster_path={serie.poster_path}
                            vote_average={serie.vote_average}
                          />{" "}
                        </Link>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PersonCredits;
