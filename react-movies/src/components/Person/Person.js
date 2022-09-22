import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Person = ({ name, profile_path }) => (
  <Card style={{ width: "15rem" }}>
    <Card.Img
      variant="top"
      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = require(process.env.PUBLIC_URL +
          "./no-movie-poster.jpeg");
      }}
    />
    <Card.Body>
      <Card.Title>
        <Container className="text-center">
          <Row>
            <Col>
              <small>{name}</small>
            </Col>
          </Row>
        </Container>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default Person;
