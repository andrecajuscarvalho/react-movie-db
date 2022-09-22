import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import getMovieCredits from "../../../../../endpoins/movies/getMovieCredits";
import Person from "../../../People/Person";
import { Link } from "react-router-dom";

const MovieCredits = ({ movie_id, seasons }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    e.preventDefault();
    getMovieCredits(setActors, { movie_id });
  }, []);

  return (
    <>
      <h1>
        <b>Movie Cast</b>
      </h1>
      <Card>
        <Card.Body>
          <Container>
            Number of actors: {actors.length}
            <Row>
              {actors.length > 0 &&
                actors.map((actor) => (
                  <Col sm={3} key={actor.id}>
                    <Link className="nav-link" to={`/people/${actor.id}/`}>
                      <Person
                        name={actor.original_name}
                        profile_path={actor.profile_path}
                      />{" "}
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCredits;
