import { API_KEY, SITE_BASE_PATH } from "../base";

export default function getPopularPeople(setter, searchVal) {
  fetch(
    SITE_BASE_PATH +
      "/3/search/person?api_key=" +
      API_KEY +
      "&language=en-US&include_adult=false&query=" +
      searchVal
  )
    .then((res) => res.json())
    .then((data) => {
      setter(data.results);
    });
}
