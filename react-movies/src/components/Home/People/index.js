import Person from "./Person";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const People = ({ num_displayed_results, people }) => {
  return (
    <>
      <Container>
        <Row>
          <h1>People</h1>
        </Row>
        <br></br>
        <Row>
          {people.length > 0 &&
            people.slice(0, num_displayed_results).map((person) => (
              <Col key={person.id}>
                <Link className="nav-link" to={`/people/${person.id}/`}>
                  <Person {...person} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default People;
