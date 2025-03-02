import { API_BASE, API_POSTS_PROFILE } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";
import { displayUserPosts } from "./displayUserPosts.js";

/**
 * Fetches the user posts from the API and displays them.
 * @async
 * @function fetchUserPosts
 * @param {string} profileName - The name of the profile to fetch posts for.
 */
export async function fetchUserPosts(profileName) {
  const postsUrl = `${API_BASE + API_POSTS_PROFILE}/${profileName}/posts`;

  try {
    const response = await fetch(postsUrl, {
      headers: headers(true),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user posts");
    }

    const userPosts = await response.json();
    displayUserPosts(userPosts);
  } catch (error) {
    console.error("Error fetching user posts:", error);
  }
}
