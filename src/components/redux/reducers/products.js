import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  ORDER_PRODUCTS_BY_PRICE,
  ORDER_PRODUCTS_BY_CATEGORY,
} from "../actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  points: null,
  message: "",
  sort: "",
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

    case ORDER_PRODUCTS_BY_PRICE: {
      return {
        ...state,
        products: action.payload,
        sort: action.payload.sort,
      };
    }

    case ORDER_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        products: action.payload,
        sort: action.payload.sort,
      };
    }

    default: {
      return state;
    }
  }
}
