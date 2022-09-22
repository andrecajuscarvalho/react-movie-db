import { API_KEY, API_BASE_PATH } from "../base";

export default async function getSearchPeople(setter, searchVal) {
  await fetch(
    API_BASE_PATH +
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
