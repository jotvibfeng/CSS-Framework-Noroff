import { headers } from "../api/headers.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../api/posts/constant.js";
import { save } from "../storage/save.js";

/**
 * Logs in a user by sending a POST request to the API.
 * @async
 * @function login
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} The profile data from the API if the login is successful.
 * @throws Will throw an error if the login fails.
 */
export async function login(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const messageElement = document.getElementById("message");

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);

    window.location.href = "/profile.html";
    return profile;
  } else {
    try {
      const errorData = await response.json();
      messageElement.textContent =
        errorData.message || "Could not login your profile";
    } catch (error) {
      messageElement.textContent = "Could not login your profile";
    }
    messageElement.style.color = "red";
    throw new Error("Could not login the account");
  }
}
