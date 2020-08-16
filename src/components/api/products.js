import { headers } from "./utils/headers";

const products = {
  get: {
    url: "https://coding-challenge-api.aerolab.co/user/history",
    method: "GET",
  },
  redeem: {
    url: "https://coding-challenge-api.aerolab.co/redeem",
    method: "POST",
  },
};

export const fetchProducts = () => {
  return fetch(products.get.url, {
    method: products.get.method,
    headers,
  });
};

export const redeemPoints = (id) => {
  return fetch(products.redeem.url, {
    method: products.redeem.method,
    headers,
    body: JSON.stringify({ productId: id }),
  });
};
