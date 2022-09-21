import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/985939?api_key=7c4f92e72d55f6996440c006312db194&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Movie Info {id}</h1>;{movie.length}
        <MovieDetails {...movie} />
      </Container>
    </>
  );
}

export default MovieInfo;
