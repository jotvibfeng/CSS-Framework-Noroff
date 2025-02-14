import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

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
