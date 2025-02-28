import { headers } from "../headers.js";
import { API_BASE, API_POSTS, API_SEARCH } from "./constant.js";

/**
 * Fetches all posts from the API.
 * @async
 * @function getPosts
 * @returns {Promise<Object>} The response data from the API.
 * @throws Will throw an error if the fetch fails.
 */
export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: headers(),
  });
  return await response.json();
}

/**
 * Searches for posts based on a query.
 * @async
 * @function searchPosts
 * @param {string} query - The search query.
 * @param {number} [postsPage=1] - The page number of the posts to fetch.
 * @param {number} [maxPosts=10] - The maximum number of posts to fetch.
 * @returns {Promise<Object>} The response data from the API.
 * @throws Will throw an error if the fetch fails.
 */
export async function searchPosts(query, postsPage = 1, maxPosts = 10) {
  const options = {
    method: "GET",
    headers: headers(true),
  };
  const response = await fetch(
    `${
      API_BASE + API_SEARCH
    }?q=${query}&_author=true&limit=${maxPosts}&page=${postsPage}`,
    options
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
