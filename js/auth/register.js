export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_KEY_URL = "/create-api-key";

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

export async function register(my_username, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ my_username, email, password }),
  });

  if (response.ok) {
    return await response.json();
  }

  const errorData = await response.json();
  console.error("Registration failed:", errorData);
  throw new Error(errorData.message || "Could not register the account");
}

export async function onAuth(event) {
  event.preventDefault();
  const form = event.target;

  const my_username = form.my_username.value; // Correct variable usage
  const email = form.email.value;
  const password = form.password.value;

  try {
    const user = await register(my_username, email, password); // Pass my_username correctly
    save("user", user); // Save user details in localStorage
    window.location.href = "profile.html"; // Redirect to profile page
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Failed to register. Please try again.");
  }
}

export function setAuthListener() {
  const form = document.forms.auth; // Ensure form with name="auth" exists
  if (form) {
    form.addEventListener("submit", onAuth);
  } else {
    console.error("Form with name 'auth' not found in the document.");
  }
}

// Initialize listener
document.addEventListener("DOMContentLoaded", setAuthListener);
