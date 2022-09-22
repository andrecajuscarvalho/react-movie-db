import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import getSeasonActors from "../../../../../endpoins/series/getSeasonActors";
import Person from "../../../People/Person";

const SerieCredits = ({ movie_id, seasons }) => {
  const [season, setSeason] = useState(1);
  const [actors, setActors] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    setSeason(e.target.value);
    getSeasonActors(setActors, { movie_id }, e.target.value);
    console.log(e.target.value);
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
                    <Col>
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
            {season}
            {actors.length}
            {actors.length > 0 &&
              actors.map((actor) => (
                <Col>
                  {actor.original_name} <Person key={actors.id} {...actors} />{" "}
                </Col>
              ))}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default SerieCredits;
