import { API_KEY, SITE_BASE_PATH } from "../base";

export default function getMovieInfo(id, setter) {
  fetch(
    SITE_BASE_PATH +
      "/3/movie/" +
      id +
      "?api_key=" +
      API_KEY +
      "&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      setter(data);
    });
}
