import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

/**
 * Creates a new post by sending a POST request to the API.
 * @async
 * @function createPost
 * @param {Object} post - The post object containing post data.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {Array<string>} [post.tags] - An optional array of tags for the post.
 * @param {string} [post.media] - An optional URL to media associated with the post.
 * @throws Will throw an error if the post creation fails.
 */
export async function createPost(post) {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}`, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
  } catch (error) {
    console.error("Error in createPost:", error);
    throw error;
  }
}
