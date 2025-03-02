import { updatePost } from "./updatePost.js";
import { fetchPosts } from "./fetchPosts.js";

export function showUpdateModal(postId, title, body) {
  document.getElementById("postTitle").value = title;
  document.getElementById("postContent").value = body || "";
  document.getElementById("newPostModal").classList.remove("hidden");

  // Show the Update Post button and hide the Create Post button
  document.getElementById("updatePostButton").classList.remove("hidden");
  document.getElementById("createPostButton").classList.add("hidden");

  // Set the updatePostHandler to use the correct postId
  window.updatePostHandler = async () => {
    try {
      await updatePost(postId, {
        title: document.getElementById("postTitle").value,
        body: document.getElementById("postContent").value,
      });
      document.getElementById("newPostModal").classList.add("hidden");
      fetchPosts();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
}
