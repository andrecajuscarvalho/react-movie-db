import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import getSeasonActors from "../../../../../endpoins/series/getSeasonActors";
import Person from "../../../People/Person";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SerieCredits = ({ seasons }) => {
  const { id } = useParams();
  const [season, setSeason] = useState(1);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getSeasonActors(setActors, id, 1);
  }, [id]);

  function handleClick(e) {
    e.preventDefault();
    setSeason(e.target.value);
    getSeasonActors(setActors, id, e.target.value);
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
            <Row>
              <Col>Current Season: {season}</Col>
            </Row>
            <Row>
              <Col>Number of actors: {actors.length}</Col>
            </Row>
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
