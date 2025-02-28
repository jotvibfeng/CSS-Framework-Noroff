import { headers } from "../api/headers.js";
import { API_AUTH, API_BASE, API_REGISTER } from "../api/posts/constant.js";

/**
 * Registers a new user by sending a POST request to the API.
 * @async
 * @function register
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {string} confirm_password - The confirmation of the password.
 * @returns {Promise<Object>} The response data from the API if the registration is successful.
 * @throws Will throw an error if the registration fails.
 */
export async function register(name, email, password, confirm_password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({ name, email, password, confirm_password }),
  });

  const messageElement = document.getElementById("message");

  if (response.ok) {
    const data = await response.json();
    messageElement.textContent = "Registration successful";
    messageElement.style.color = "green";
    window.location = "/profile.html";
    return data;
  }

  try {
    await response.json();
  } catch (error) {
    messageElement.textContent = "Profile already exists";
    messageElement.style.color = "red";
  }

  throw new Error("Could not register the account");
}
