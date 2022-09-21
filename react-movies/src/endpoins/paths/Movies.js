import { API_KEY, SITE_BASE_PATH } from "./Generic";

/** retrieves all the most popular movies **/
const API_POPULAR_MOVIES =
  SITE_BASE_PATH + "/3/movie/popular?api_key=" + API_KEY + "&language=en-US";

/** retrieves movies based on search query **/
const API_SEARCH_MOVIES =
  SITE_BASE_PATH +
  "/3/search/movie?api_key=" +
  API_KEY +
  "&language=en-US&include_adult=false&query=";

const API_MOVIE_INFO = (props) => {
  const id = props.id;
  return (
    SITE_BASE_PATH +
    "/3/movie/" +
    id +
    "?api_key=" +
    API_KEY +
    "&language=en-US"
  );
};

export { API_POPULAR_MOVIES, API_SEARCH_MOVIES, API_MOVIE_INFO };
