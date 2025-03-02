import { API_BASE, API_SEARCH } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";
import { displayPosts } from "./displayPosts.js";

export async function searchPosts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  try {
    const headersConfig = headers(true);

    const response = await fetch(`${API_BASE + API_SEARCH}?q=${searchTerm}`, {
      method: "GET",
      headers: headersConfig,
    });

    if (!response.ok) {
      throw new Error("Failed to search posts");
    }

    const responseData = await response.json();

    const posts = responseData.data || [];

    if (!Array.isArray(posts)) {
      console.error("Search API response is not an array", posts);
      return;
    }

    displayPosts(posts);
  } catch (error) {
    console.error("Error in searchPosts", error);
  }
}
