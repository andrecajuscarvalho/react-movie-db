import { API_KEY, API_BASE_PATH } from "../base";

export default async function getSerieCredits(setter, id, seasonNumber) {
  await fetch(
    API_BASE_PATH +
      "/3/tv/" +
      id +
      "/season/" +
      seasonNumber +
      "/aggregate_credits?api_key=" +
      API_KEY +
      "&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setter(data.cast);
    });
}
