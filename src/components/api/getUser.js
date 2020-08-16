import { headers } from "./utils/headers";
const url = "https://coding-challenge-api.aerolab.co/user/me";
const method = "GET";

export const fetchProfile = () => {
  return fetch(url, {
    method,
    headers,
  });
};
