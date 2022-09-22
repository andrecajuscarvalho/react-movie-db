import { API_KEY, API_BASE_PATH } from "../base";

export default async function getPersonInfo(id, setter) {
  await fetch(
    API_BASE_PATH +
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
