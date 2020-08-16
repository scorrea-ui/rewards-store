import { combineReducers } from "redux";
import users from "./users";
import products from "./products";
import points from "./points";

export default combineReducers({ users, products, points });
