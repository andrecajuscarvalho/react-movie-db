import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import getMovieInfo from "../endpoins/movies/getMovieInfo";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieInfo(id, setMovie);
  }, [id]);

  return (
    <>
      <Container>
        <MovieDetails {...movie} />
      </Container>
    </>
  );
}
