import { API_BASE, API_POSTS } from "../api/posts/constant.js";

document
  .getElementById("postForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    await createPost({ title, content });
    document.getElementById("newPostModal").classList.add("hidden");
    fetchPosts();
  });

async function createPost(post) {
  await fetch(`${API_BASE + API_POSTS}/id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

async function fetchPosts() {
  const response = await fetch(`${API_BASE + API_POSTS}/id`);
  const posts = await response.json();
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="deletePost(${post.id})">Delete</button>
      <button onclick="showUpdateModal(${post.id}, '${post.title}', '${post.content}')">Update</button>
    `;
    postsContainer.appendChild(postElement);
  });
}

async function deletePost(postId) {
  await fetch(`${API_BASE + API_POSTS}/id/${postId}`, {
    method: "DELETE",
  });
  fetchPosts();
}

function showUpdateModal(postId, title, content) {
  document.getElementById("postTitle").value = title;
  document.getElementById("postContent").value = content;
  document.getElementById("newPostModal").classList.remove("hidden");

  document.getElementById("postForm").onsubmit = async (event) => {
    event.preventDefault();
    await updatePost(postId, {
      title: document.getElementById("postTitle").value,
      content: document.getElementById("postContent").value,
    });
    document.getElementById("newPostModal").classList.add("hidden");
    fetchPosts();
  };
}

async function updatePost(postId, post) {
  await fetch(`${API_BASE + API_POSTS}/id/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

// Ensure deletePost and showUpdateModal are accessible in the global scope
window.deletePost = deletePost;
window.showUpdateModal = showUpdateModal;

// Initial fetch of posts
fetchPosts();
