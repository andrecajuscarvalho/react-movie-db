import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SerieCredits from "./SerieCredits";
import NoSerie from "../../Series/NoSerie.png";

const SerieDetails = (props) => {
  const { serie } = props;
  return (
    <>
      <h1>
        <b>{serie.name}</b>
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
                      <b>Title:</b> {serie.name}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <b>Rating:</b> {serie.vote_average}
                    </Col>
                    <Col>
                      <b>Vote Count:</b> {serie.vote_count}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <b>Release Date:</b> {serie.first_air_date}
                    </Col>
                    <Col>
                      <b>Status:</b> {serie.status}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <b>Seasons:</b> {serie.number_of_seasons}
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col align="justify">
                      <b>Overview:</b> {serie.overview}
                    </Col>
                  </Row>
                  {serie.season_number}
                </Col>
                <Col sm={4}>
                  <Card.Img
                    variant="top"
                    src={
                      serie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
                        : NoSerie
                    }
                  />
                </Col>
              </Row>
            </Container>
          </Card.Title>
        </Card.Body>
      </Card>
      <SerieCredits seasons={serie.number_of_seasons} />
    </>
  );
};

export default SerieDetails;
