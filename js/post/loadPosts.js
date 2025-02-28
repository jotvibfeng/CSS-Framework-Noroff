import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

/**
 * Loads and displays posts.
 * @async
 * @function loadPosts
 */
export async function loadPosts() {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}`, {
      headers: headers(true),
    });

    if (!response.ok) {
      throw new Error("Failed to load posts");
    }

    const result = await response.json();
    const posts = result.data;
    displayPosts(posts);
  } catch (error) {
    console.error("Error loading posts:", error);
  }
}

/**
 * Displays posts on the page.
 * @function displayPosts
 * @param {Array} posts - The array of post objects.
 */
export function displayPosts(posts) {
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

    const titleElement = document.createElement("h3");
    titleElement.classList.add("text-xl", "font-bold", "mb-2");
    titleElement.textContent = post.title || "No title available";

    const bodyElement = document.createElement("p");
    bodyElement.classList.add("text-gray-700", "mb-4");
    bodyElement.textContent = post.body || "No content available";

    const authorElement = document.createElement("p");
    authorElement.classList.add("text-gray-600", "mb-4");
    authorElement.textContent = `Post by: ${
      post.author ? post.author.name : "Unknown author"
    }`;

    const imageElement = document.createElement("img");
    if (post.media && post.media.url) {
      imageElement.src = post.media.url;
      imageElement.alt = post.media.alt || "Post image";
      imageElement.classList.add("mb-4");
    }

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);
    postElement.appendChild(authorElement);
    if (post.media && post.media.url) {
      postElement.appendChild(imageElement);
    }

    postsContainer.appendChild(postElement);
  });
}
