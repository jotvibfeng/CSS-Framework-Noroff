/**
 * Handles the form submission to create a new post.
 * @async
 * @function handleCreatePost
 * @param {Event} event - The form submit event.
 */
export async function handleCreatePost(event) {
  event.preventDefault();

  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;
  const imageFile = document.getElementById("postImage").files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("body", content);
  if (imageFile) {
    formData.append("media", imageFile);
  }

  try {
    await createPost(formData);
    console.log("Post created successfully");
    document.getElementById("newPostModal").classList.add("hidden");
    loadPosts();
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// Load posts when the page loads
loadPosts();
