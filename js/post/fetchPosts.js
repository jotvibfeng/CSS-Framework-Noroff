import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";
import { displayPosts } from "./displayPosts.js";

export async function fetchPosts() {
  try {
    const tag = document.getElementById("sortSelect").value;
    let url = `${API_BASE + API_POSTS}`;

    if (tag && tag !== "[]") {
      url += `?_tag=${tag}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: headers(true),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const responseData = await response.json();
    const posts = responseData.data || responseData;

    if (!Array.isArray(posts)) {
      console.error("API response is not an array:", posts);
      return;
    }

    // Sort posts by creation date in descending order
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    displayPosts(posts);
  } catch (error) {
    console.error("Error in fetchPosts:", error);
  }
}
