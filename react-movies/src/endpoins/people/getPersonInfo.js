import { API_KEY, SITE_BASE_PATH } from "../base";

export default function getPersonInfo(id, setter) {
  fetch(
    SITE_BASE_PATH +
      "/3/person/" +
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
