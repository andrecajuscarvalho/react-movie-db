import "./App.css";
import NavBar from "./components/navbar/Navbar";
import About from "./pages/About";
import People from "./pages/People";
import Series from "./pages/Series";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series/" element={<Series />} />
        <Route path="people/" element={<People />} />
        <Route path="about/" element={<About />} />
        <Route path="movies/" element={<MovieInfo />} />
        <Route path="movie/:id/" element={<MovieInfo />} />
      </Routes>
    </>
  );
}

export default App;
