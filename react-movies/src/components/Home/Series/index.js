import Serie from "./Serie";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Series = ({ num_displayed_results, series }) => {
  return (
    <>
      <Container>
        <Row>
          <h1>Series</h1>
        </Row>
        <br></br>
        <Row>
          {series.length > 0 &&
            series.slice(0, num_displayed_results).map((serie) => (
              <Col>
                <Link className="nav-link" to={`/series/${serie.id}/`}>
                  <Serie key={serie.id} {...serie} />
                </Link>
              </Col>
            ))}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Series;
