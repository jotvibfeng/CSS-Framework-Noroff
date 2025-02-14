import { fetchPosts } from "./post/fetchPosts.js";
import { createPost } from "./post/createPost.js";
import { searchPosts } from "./post/searchPost.js";
import { showUpdateModal } from "./post/showUpdateModal.js";
import { deletePost } from "./post/deletePost.js";

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

document.getElementById("searchInput").addEventListener("input", searchPosts);
document.getElementById("sortSelect").addEventListener("change", fetchPosts);

window.searchPosts = searchPosts;
window.deletePost = deletePost;
window.showUpdateModal = showUpdateModal;

fetchPosts();
