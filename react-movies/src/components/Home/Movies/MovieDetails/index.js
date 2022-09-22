import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoMovie from "../../Movies/NoMovie.png";

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
                <br></br>
                <Row>
                  <Col>
                    <b>Title:</b> {props.title}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <b>Rating:</b> {props.vote_average}
                  </Col>
                  <Col>
                    <b>Vote Count:</b> {props.vote_count}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <b>Release Date:</b> {props.release_date}
                  </Col>
                  <Col>
                    <b>Status:</b> {props.status}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <b>Runtime:</b> {props.runtime}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <b>Revenue:</b> {props.revenue}$
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col align="justify">
                    <b>Overview:</b> {props.overview}
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <Card.Img
                  variant="top"
                  src={
                    props.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
                      : NoMovie
                  }
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
