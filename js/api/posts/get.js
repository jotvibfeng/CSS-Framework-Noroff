import { load } from "../../storage/load.js";
import { API_BASE, API_POSTS } from "./constant.js";

export async function getPosts() {
  const response = await fetch(API_BASE + API_POSTS, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return await response.json();
}
