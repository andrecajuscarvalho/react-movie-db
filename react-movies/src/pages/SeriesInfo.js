import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SerieDetails from "../components/SerieDetails/SerieDetails";
import getSerieInfo from "../endpoins/series/getSerieInfo";

export default function SeriesInfo() {
  const { id } = useParams();
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    getSerieInfo(id, setSerie);
  }, [id]);

  return (
    <>
      <Container>
        <SerieDetails {...serie} />
      </Container>
    </>
  );
}
