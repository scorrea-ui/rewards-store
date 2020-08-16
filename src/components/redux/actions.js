import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_PENDING,
  GET_HISTORY_PENDING,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILED,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_PENDING,
  REDEEM_POINTS_FAILED,
  REDEEM_POINTS_SUCCESS,
  REDEEM_POINTS_PENDING,
  ADD_POINTS_FAILED,
  ADD_POINTS_SUCCESS,
  ADD_POINTS_PENDING,
  ORDER_PRODUCTS
} from "./actionTypes";
import { fetchProfile, fetchHistory, addPoints } from "../api/users";
import { fetchProducts, redeemPoints } from "../api/products";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER_PENDING,
    });

    const res = await fetchProfile();
    const result = await res.json();

    try {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: result,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_FAILED,
        error: error,
        loading: false,
      });
    }
  };
};

export const getHistory = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_HISTORY_PENDING,
    });

    const res = await fetchHistory();
    const result = await res.json();

    try {
      dispatch({
        type: GET_HISTORY_SUCCESS,
        payload: result,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: GET_HISTORY_FAILED,
        error: error,
        loading: false,
      });
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_PENDING,
    });

    const res = await fetchProducts();
    const result = await res.json();

    try {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: result,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        error: error,
        loading: false,
      });
    }
  };
};

export const redeemUserPoints = (id) => {
  return async (dispatch) => {
    dispatch({
      type: REDEEM_POINTS_PENDING,
    });

    const res = await redeemPoints(id);
    const result = await res.json();

    try {
      dispatch({
        type: REDEEM_POINTS_SUCCESS,
        message: result,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: REDEEM_POINTS_FAILED,
        error: error,
        message: result,
        loading: false,
      });
    }
  };
};

export const addUserPoints = (amount) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_POINTS_PENDING,
    });

    const res = await addPoints(amount);
    const result = await res.json();

    try {
      dispatch({
        type: ADD_POINTS_SUCCESS,
        message: result,
        loading: false,
      });
    } catch (error) {
      dispatch({
        type: ADD_POINTS_FAILED,
        error: error,
        message: result,
        loading: false,
      });
    }
  };
};

export const sortProductsByPrice = (product, sort) => {
  return (dispatch) => {
    const products = product;
    console.log(products);
    if (sort !== "") {
      products.sort((a, b) => sort === "lowestprice" ? a.cost > b.cost ? 1 : -1
      : sort === "highestprice" ? a.cost < b.cost ? 1 : -1 : sort === "category"
     ? a.category > b.category ? 1 : -1 : products
      );
    }

    dispatch({
      type: ORDER_PRODUCTS,
      payload: products,
      sort: sort,
    });
  };
};
