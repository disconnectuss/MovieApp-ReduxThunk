import axios from "axios";
import { options } from "../../utils/constant";
import { actionTypes } from "./actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

//async actions// both fetching and dispatching data
export const getMovies = () => (dispatch) => {
  axios.get("/movie/popular", options).then((res) =>
    dispatch({
      type: actionTypes.SET_MOVIES,
      payload: res.data.results,
    })
  );
};
export const getGenres = () => (dispatch) => {
  axios.get("/genre/movie/list?language=en", options).then((res) =>
    dispatch({
      type: actionTypes.SET_GENRES,
      payload: res.data.genres,
    })
  );
};
