import { load } from "../storage/load.js";
import { API_KEY } from "./posts/constant.js";

/**
 * Generates headers for API requests.
 * @function headers
 * @param {boolean} [hasBody=false] - Indicates whether the request has a body.
 * @returns {Headers} The headers for the API request.
 */
export function headers(hasBody = false) {
  const headers = new Headers();

  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
