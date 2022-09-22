import { API_KEY, API_BASE_PATH } from "../base";

export default function getSeasonActors(setter, { movie_id }, season_number) {
  fetch(
    API_BASE_PATH +
      "/3/tv/" +
      movie_id +
      "/season/" +
      season_number +
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
