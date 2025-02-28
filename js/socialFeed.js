/**
 * Imports necessary functions for post management.
 */
import { fetchPosts } from "./post/fetchPosts.js";
import { createPost } from "./post/createPost.js";
import { searchPosts } from "./post/searchPost.js";
import { showUpdateModal } from "./post/showUpdateModal.js";
import { deletePost } from "./post/deletePost.js";

/**
 * Handles the submission of the post creation form.
 * Prevents default form submission, retrieves input values,
 * attempts to create a post, and updates the post list.
 *
 * @param {Event} event - The form submission event.
 */
document
  .getElementById("postForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postContent").value;

    try {
      await createPost({ title, body });
      document.getElementById("newPostModal").classList.add("hidden");
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  });

/**
 * Attaches event listeners for searching and sorting posts.
 */
document.getElementById("searchInput").addEventListener("input", searchPosts);
document.getElementById("sortSelect").addEventListener("change", fetchPosts);

// Expose functions globally for UI interactions
window.searchPosts = searchPosts;
window.deletePost = deletePost;
window.showUpdateModal = showUpdateModal;

/**
 * Fetches and displays posts on page load.
 */
fetchPosts();
