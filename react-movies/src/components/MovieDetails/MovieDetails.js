import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetails = (props) => (
  <>
    <h1>
      <b>{props.title}</b>
    </h1>
    <Card>
      <Card.Body>
        <Card.Title>
          <Container>
            <Row>
              <Col sm={8}>
                <Row>
                  <Col>
                    Title: <b>{props.title}</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Rating: <b>{props.vote_average}</b>
                  </Col>
                  <Col>
                    Vote Count: <b>{props.vote_count}</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Release Date: <b>{props.release_date}</b>
                  </Col>
                  <Col>
                    Status: <b>{props.status}</b>
                  </Col>
                </Row>

                <Row>Runtime: {props.runtime}</Row>
                <Row>Revenue: {props.revenue}$</Row>

                <Row>
                  <Col>
                    adult: <b>{props.adult}</b>
                  </Col>
                  <Col>
                    backdrop_path: <b>{props.backdrop_path}</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    belongs_to_collection Date:{" "}
                    <b>{props.belongs_to_collection}</b>
                  </Col>
                  <Col>
                    Status: <b>{props.budget}</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Release Date: <b>{props.budget}</b>
                  </Col>
                  <Col>
                    Status: <b>{props.status}</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Release Date: <b>{props.release_date}</b>
                  </Col>
                  <Col>
                    Status: <b>{props.status}</b>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = require("./no-movie-poster.jpeg");
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Card.Title>
      </Card.Body>
    </Card>
  </>
);

export default MovieDetails;
