import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_PENDING,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_PENDING,
  REDEEM_POINTS_FAILED,
  REDEEM_POINTS_SUCCESS,
  REDEEM_POINTS_PENDING,
} from "./actionTypes";
import { fetchProfile } from "../api/getUser";
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
