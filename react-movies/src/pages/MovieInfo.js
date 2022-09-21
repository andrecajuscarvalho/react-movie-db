import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API_MOVIE_INFO } from "../endpoins/paths/Movies";
import CustomFetch from "../endpoins/methods/CustomFetch";
import MovieDetails from "../components/MovieDetails/MovieDetails";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    CustomFetch({
      endpoint_path: API_MOVIE_INFO({ id }),
      setter: setMovie,
    });
  }, []);

  return (
    <>
      <Container>
        <h1>Movie Info {id}</h1>;
        <MovieDetails key={id} {...movie} />
      </Container>
    </>
  );
}

export default MovieInfo;
