import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

/**
 * Updates a post by sending a PUT request to the API.
 * @async
 * @function updatePost
 * @param {number} postId - The ID of the post to update.
 * @param {Object} post - The post data to update.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {Object} [post.media] - The media object containing media details.
 * @param {string} [post.media.url] - The URL of the media.
 * @param {string} [post.media.alt] - The alt text for the media.
 * @throws Will throw an error if the post update fails.
 */
export async function updatePost(postId, post) {
  const messageElement = document.getElementById("message"); // Element to display the message

  try {
    const response = await fetch(`${API_BASE + API_POSTS}/${postId}`, {
      method: "PUT",
      headers: headers(true),
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Failed to update post");
    }
    messageElement.textContent = "Post updated successfully";
    messageElement.style.color = "green";
  } catch (error) {
    console.error("Error in updatePost:", error);
    messageElement.textContent = "Failed to update post";
    messageElement.style.color = "red";
    throw error;
  }
}
