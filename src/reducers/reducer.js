import {
  DATA_LOAD_START,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_FAILURE
} from "../actions/actions";

export const initialState = {
  isLoading: false,
  error: "",
  lyrics: "",
  artist: "",
  title: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOAD_START:
      return {
        ...state,
        isLoading: true,
        artist: action.payload,
        title: action.payload
      };
    case DATA_LOAD_SUCCESS:
      return {
        ...state,
        lyrics: action.payload,
        isLoading: false
      };
    case DATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
