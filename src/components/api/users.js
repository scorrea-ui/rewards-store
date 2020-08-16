import { headers } from "./utils/headers";

const users = {
  get: {
    url: "https://coding-challenge-api.aerolab.co/user/me",
    method: "GET",
  },
  redeem: {
    url: "https://coding-challenge-api.aerolab.co/user/history",
    method: "GET",
  },
  add: {
    url: "https://coding-challenge-api.aerolab.co/user/points",
    method: "POST",
  },
};

export const fetchProfile = () => {
  return fetch(users.get.url, {
    method: users.get.method,
    headers,
  });
};

export const fetchHistory = () => {
  return fetch(users.redeem.url, {
    method: users.redeem.method,
    headers,
  });
};

export const addPoints = (amount) => {
  return fetch(users.add.url, {
    method: users.add.method,
    headers,
    body: JSON.stringify({ amount }),
  });
};
