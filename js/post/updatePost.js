import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

export async function updatePost(postId, post) {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}/${postId}`, {
      method: "PUT",
      headers: headers(true),
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Failed to update post");
    }
  } catch (error) {
    console.error("Error in updatePost:", error);
    throw error;
  }
}
