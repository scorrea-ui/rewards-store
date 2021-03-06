import {
  GET_USER_PENDING,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GET_HISTORY_PENDING,
  GET_HISTORY_FAILED,
  GET_HISTORY_SUCCESS,
} from "../actionTypes";

const initialState = {
  user: "",
  loading: false,
  error: null,
  history: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case GET_USER_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }

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
