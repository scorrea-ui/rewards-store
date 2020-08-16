import {
  GET_USER_PENDING,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
} from "../actionTypes";

const initialState = {
  user: "",
  loading: false,
  error: null,
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

    default: {
      return state;
    }
  }
}
