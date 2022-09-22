import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoPerson from "../../People/NoPerson.png";
import PersonCredits from "./PersonCredits";

const PersonDetails = (props) => (
  <>
    <h1>
      <b>{props.name}</b>
    </h1>
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={8}>
              <br></br>
              <Row>
                <Col>
                  <b>birthday:</b> {props.birthday}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <b>Field:</b> {props.known_for_department}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <b>gender:</b> {props.gender == 2 ? "Male" : "Female"}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <b>Born:</b> {props.place_of_birth}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <b>Also Known As:</b> {props.also_known_as}
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col align="justify">
                  <b>Overview:</b> {props.biography}
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <Card.Img
                variant="top"
                src={
                  props.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${props.profile_path}`
                    : NoPerson
                }
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
    <PersonCredits />
  </>
);

export default PersonDetails;
