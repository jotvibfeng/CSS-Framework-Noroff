import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";
import { fetchPosts } from "./fetchPosts.js";

export async function deletePost(postId) {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}/${postId}`, {
      method: "DELETE",
      headers: headers(true),
    });
    if (!response.ok) {
      throw new Error("Failed to delete post");
    }
    fetchPosts();
  } catch (error) {
    console.error("Error in deletePost:", error);
  }
}
