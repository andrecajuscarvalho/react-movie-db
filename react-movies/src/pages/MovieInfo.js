import Container from "react-bootstrap/Container";
import { Routes, Route, useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  return (
    <>
      <Container>
        <h1>Movie Info {id}</h1>;
      </Container>
    </>
  );
}

export default MovieInfo;
