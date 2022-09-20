import "./App.css";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Person from "./pages/Person";
import TvShow from "./pages/TvShow";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tvshows" element={<TvShow />} />
        <Route path="person" element={<Person />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
