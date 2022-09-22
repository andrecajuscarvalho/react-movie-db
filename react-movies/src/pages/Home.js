import Welcome from "../components/Home/Welcome";
import React, { useState, useEffect } from "react";
import Search from "../components/Home/Generic/Search";
import getPopularMovies from "../endpoins/movies/getPopularMovies";
import getPopularSeries from "../endpoins/series/getPopularSeries";
import getPopularPeople from "../endpoins/people/getPopularPeople";
import getSearchedMovies from "../endpoins/movies/getSearchedMovies";
import getSearchedSeries from "../endpoins/series/getSearchedSeries";
import getSearchedPeople from "../endpoins/people/getSearchedPeople";
import Movies from "../components/Home/Movies";
import Series from "../components/Home/Series";
import People from "../components/Home/People";
import { useNavigate, useSearchParams } from "react-router-dom";

function Home() {
  const num_displayed_results = 5;
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [people, setPeople] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    getPopularMovies(setMovies);
    getPopularSeries(setSeries);
    getPopularPeople(setPeople);
    if (query && query.length > 0) {
      getSearchedMovies(setMovies, query);
      getSearchedSeries(setSeries, query);
      getSearchedPeople(setPeople, query);
    }
  }, [searchParams]);

  const actionOnSubmit = (e) => {
    e.preventDefault();
    getSearchedMovies(setMovies, searchVal);
    getSearchedSeries(setSeries, searchVal);
    getSearchedPeople(setPeople, searchVal);
    navigate({ pathname: "/", search: `query=${searchVal}` });
    setSearchVal("");
  };

  return (
    <>
      <Welcome />
      <Search
        searchVal={searchVal}
        actionOnSubmit={actionOnSubmit}
        setSearchVal={setSearchVal}
      />
      <Movies num_displayed_results={num_displayed_results} movies={movies} />
      <Series num_displayed_results={num_displayed_results} series={series} />
      <People num_displayed_results={num_displayed_results} people={people} />
    </>
  );
}

export default Home;
