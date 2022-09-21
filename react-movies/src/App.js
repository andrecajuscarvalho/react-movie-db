import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About";
import People from "./pages/People";
import PeopleInfo from "./pages/PeopleInfo";
import Series from "./pages/Series";
import SeriesInfo from "./pages/SeriesInfo";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Movies from "./pages/Movies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/" element={<Movies />} />
        <Route path="movies/:id/" element={<MovieInfo />} />
        <Route path="series/" element={<Series />} />
        <Route path="series/:id/" element={<SeriesInfo />} />
        <Route path="people/" element={<People />} />
        <Route path="people/:id/" element={<PeopleInfo />} />
        <Route path="about/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
