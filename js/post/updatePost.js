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
