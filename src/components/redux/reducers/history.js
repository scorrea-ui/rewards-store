import {
  GET_HISTORY_PENDING,
  GET_HISTORY_FAILED,
  GET_HISTORY_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  history: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_HISTORY_SUCCESS: {
      return {
        ...state,
        history: action.payload,
        loading: false,
      };
    }
    case GET_HISTORY_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
