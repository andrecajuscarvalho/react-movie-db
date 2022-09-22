import "./App.css";
import NavBar from "./components/Home/Navbar/Navbar";
import About from "./pages/About";
import PersonInfo from "./pages/PersonInfo";
import SeriesInfo from "./pages/SeriesInfo";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id/" element={<MovieInfo />} />
        <Route path="series/:id/" element={<SeriesInfo />} />
        <Route path="people/:id/" element={<PersonInfo />} />
        <Route path="about/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
