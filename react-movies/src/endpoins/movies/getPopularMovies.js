import { API_KEY, SITE_BASE_PATH } from "../base";

export default function getPopularMovies(setter) {
  fetch(
    SITE_BASE_PATH + "/3/movie/popular?api_key=" + API_KEY + "&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      setter(data.results);
    });
}
