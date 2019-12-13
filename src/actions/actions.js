import axios from "axios";

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const getData = (artist, title) => dispatch => {
  dispatch({ type: DATA_LOAD_START });
  axios
    .get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      dispatch({
        type: DATA_LOAD_SUCCESS,
        payload: res.data.lyrics
      });
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: DATA_LOAD_FAILURE,
        payload: err
      });
    });
};
