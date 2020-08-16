import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  points: null,
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }
    case GET_PRODUCTS_FAILED: {
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
