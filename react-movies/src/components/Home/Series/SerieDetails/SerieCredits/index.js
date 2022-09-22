import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import getSeasonActors from "../../../../../endpoins/series/getSeasonActors";
import Person from "../../../People/Person";
import { Link } from "react-router-dom";

const SerieCredits = ({ serieId, seasons }) => {
  const [season, setSeason] = useState(1);
  const [actors, setActors] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setSeason(e.target.value);
    getSeasonActors(setActors, { serieId }, e.target.value);
  }

  return (
    <>
      <h1>
        <b>Cast by season</b>
      </h1>
      <Card>
        <Card.Header>
          <Container>
            <Row>
              <Col sm={4}>
                <h4>Choose a Season:</h4>
              </Col>
              <Col>
                <Row>
                  {[...Array(seasons)].map((x, i) => (
                    <Col key={i}>
                      <Button
                        onClick={handleClick}
                        value={i + 1}
                        variant="outline-dark"
                      >
                        {i + 1}
                      </Button>{" "}
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Container>
            Current Season: {season}
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

export default SerieCredits;
