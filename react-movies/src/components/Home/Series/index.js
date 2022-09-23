import Serie from "./Serie";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Series = ({ num_displayed_results, series, query }) => {
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
              <Col key={serie.id}>
                <Link className="nav-link" to={`/series/${serie.id}/`}>
                  <Serie {...serie} />
                </Link>
              </Col>
            ))}
          {series.length === 0 ? (
            <Alert variant="dark">
              There are no <b>series</b> with the title <b>{query}</b>!
            </Alert>
          ) : null}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Series;
