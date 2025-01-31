import { API_BASE, API_POSTS } from "../api/posts/constant.js";
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
      headers: headers(true),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const responseData = await response.json();
    console.log("Full API response:", responseData);

    const posts = responseData.posts || responseData.data || responseData;

    if (!Array.isArray(posts)) {
      console.error("API response is not an array:", posts);
      return;
    }

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
          <button class="bg-customPurple text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition" onclick="deletePost(${
            post.id
          })">Delete</button>
          <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition" onclick="showUpdateModal(${
            post.id
          }, '${post.title}', '${post.body || ""}')">Update</button>
        `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error in fetchPosts:", error);
  }
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

  document.getElementById("postForm").onsubmit = async (event) => {
    event.preventDefault();
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

window.deletePost = deletePost;
window.showUpdateModal = showUpdateModal;

fetchPosts();
