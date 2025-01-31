import { API_AUTH } from "./constant.js";

export function headers(authRequired = false) {
  const baseHeaders = {
    "Content-Type": "application/json",
  };

  if (authRequired) {
    return {
      ...baseHeaders,
      Authorization: `Bearer ${API_AUTH}`, // Use API_AUTH for the Authorization header
    };
  }

  return baseHeaders;
}
