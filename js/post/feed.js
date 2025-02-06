import { API_BASE, API_POSTS, API_SEARCH } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

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

async function createPost(post) {
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

async function fetchPosts() {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}`, {
      method: "GET",
      headers: headers(true),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const responseData = await response.json();
    console.log("Full API response:", responseData);

    const posts = responseData.data || responseData;

    if (!Array.isArray(posts)) {
      console.error("API response is not an array:", posts);
      return;
    }

    displayPosts(posts);
  } catch (error) {
    console.error("Error in fetchPosts:", error);
  }
}

function displayPosts(posts) {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add(
      "border",
      "rounded-lg",
      "p-4",
      "mb-4",
      "bg-white",
      "shadow-md"
    );
    postElement.innerHTML = `
          <h3 class="text-xl font-bold mb-2">${post.title}</h3>
          <p class="text-gray-700 mb-4">${
            post.body || "No content available"
          }</p> <!-- Handle null values -->
          <p class="text-gray-600 mb-4">Post by: ${post.id}</p>
          <button class="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition" onclick="deletePost(${
            post.id
          })">Delete</button>
          <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition" onclick="showUpdateModal(${
            post.id
          }, '${post.title}', '${post.body || ""}')">Update</button>
        `;
    postsContainer.appendChild(postElement);
  });
}

async function deletePost(postId) {
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

function showUpdateModal(postId, title, body) {
  document.getElementById("postTitle").value = title;
  document.getElementById("postContent").value = body || "";
  document.getElementById("newPostModal").classList.remove("hidden");

  // Show the Update Post button and hide the Create Post button
  document.getElementById("updatePostButton").classList.remove("hidden");
  document.getElementById("createPostButton").classList.add("hidden");

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

async function updatePost(postId, post) {
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

async function searchPosts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  console.log("Search term:", searchTerm);
  try {
    const headersConfig = headers(true);
    console.log("Headers:", headersConfig);

    const response = await fetch(`${API_BASE + API_SEARCH}?q=${searchTerm}`, {
      method: "GET",
      headers: headersConfig,
    });
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to search posts");
    }

    const responseData = await response.json();
    console.log("Search API response:", responseData);
    console.log("API URL:", `${API_BASE + API_SEARCH}?q=${searchTerm}`);
    console.log("Search term:", searchTerm);

    const posts = responseData.data || [];

    if (!Array.isArray(posts)) {
      console.error("Search API response is not an array", posts);
      return;
    }

    displayPosts(posts);
  } catch (error) {
    console.error("Error in searchPosts", error);
  }
}

window.searchPosts = searchPosts;
window.deletePost = deletePost;
window.showUpdateModal = showUpdateModal;

document.getElementById("searchInput").addEventListener("input", searchPosts);

fetchPosts();
