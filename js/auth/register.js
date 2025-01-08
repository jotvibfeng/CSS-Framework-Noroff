import { headers } from "../api/headers.js";
import { API_AUTH, API_BASE, API_REGISTER } from "../api/posts/constant.js";

export async function register(name, email, password, confirm_password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({ name, email, password, confirm_password }),
  });

  if (response.ok) {
    window.location = "/profile.html";
    return await response.json();
  }

  throw new Error("Could not register the account");
}
