import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stars from "../../Generic/Stars";
import NoMovie from "../../Movies/NoMovie.png";

const Movie = ({ title, poster_path, vote_average }) => (
  <Card style={{ width: "15rem" }}>
    <Card.Img
      variant="top"
      src={
        poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : NoMovie
      }
    />
    <Card.Body>
      <Card.Title>
        <Container className="text-center">
          <Row>
            <Col>
              <small>{title}</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stars vote_average={vote_average} />
            </Col>
          </Row>
        </Container>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default Movie;
