import { headers } from "../headers.js";
import { API_BASE, API_POSTS } from "./constant.js";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: headers(),
  });
  return await response.json();
}
