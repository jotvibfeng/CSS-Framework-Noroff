import { API_BASE, API_POSTS } from "../api/posts/constant.js";
import { headers } from "../api/headers.js";

/**
 * Fetches the post details from the API and displays them.
 * @async
 * @function fetchPostDetail
 * @param {string} postId - The ID of the post to fetch.
 */
async function fetchPostDetail(postId) {
  const postUrl = `${API_BASE + API_POSTS}/${postId}`;

  try {
    const response = await fetch(postUrl, {
      headers: headers(true),
      method: "GET",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Post not found");
      } else {
        throw new Error("Failed to fetch post details");
      }
    }

    const result = await response.json();
    const post = result.data; // Access the data object directly
    console.log("API Response:", post); // Log the API response
    displayPostDetail(post);
  } catch (error) {
    console.error("Error fetching post details:", error);
    displayError(error.message);
  }
}

/**
 * Displays the post details on the page.
 * @function displayPostDetail
 * @param {Object} post - The post object containing post details.
 */
function displayPostDetail(post) {
  const postDetailContainer = document.getElementById("postDetailContainer");

  // Check if the post object contains the necessary fields
  const title = post.title || "No title available";
  const body = post.body || "No content available";
  const author = post.author ? post.author.name : "Unknown author";

  postDetailContainer.innerHTML = `
    <div class="border w-custom rounded-lg p-4 mb-4 bg-white shadow-md mx-auto text-center">
      <h3 class="text-xl font-bold mb-2">${title}</h3>
      <p class="text-gray-700 mb-4">${body}</p>
      <p class="text-gray-600 mb-4">Post by: ${author}</p>
    </div>
  `;
}

/**
 * Displays an error message on the page.
 * @function displayError
 * @param {string} message - The error message to display.
 */
function displayError(message) {
  const postDetailContainer = document.getElementById("postDetailContainer");
  postDetailContainer.innerHTML = `
    <div class="border rounded-lg p-4 mb-4 bg-white shadow-md mx-auto text-center">
      <h3 class="text-xl font-bold mb-2 text-red-500">Error</h3>
      <p class="text-gray-700 mb-4">${message}</p>
    </div>
  `;
}

// Get the post ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

// Fetch and display the post details
if (postId) {
  fetchPostDetail(postId);
} else {
  console.error("No post ID found in URL");
  displayError("No post ID found in URL");
}
