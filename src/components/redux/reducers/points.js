import {
  REDEEM_POINTS_PENDING,
  REDEEM_POINTS_SUCCESS,
  REDEEM_POINTS_FAILED,
  ADD_POINTS_PENDING,
  ADD_POINTS_SUCCESS,
  ADD_POINTS_FAILED,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REDEEM_POINTS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case REDEEM_POINTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    }

    case REDEEM_POINTS_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
        message: action.message,
      };
    }

    case ADD_POINTS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_POINTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    }

    case ADD_POINTS_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
        message: action.message,
      };
    }

    default: {
      return state;
    }
  }
}
