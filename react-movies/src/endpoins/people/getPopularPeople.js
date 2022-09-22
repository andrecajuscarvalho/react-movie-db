import { API_KEY, SITE_BASE_PATH } from "../base";

export default function getPopularPeople(setter) {
  fetch(
    SITE_BASE_PATH + "/3/person/popular?api_key=" + API_KEY + "&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      setter(data.results);
    });
}