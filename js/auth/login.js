import { headers } from "../api/headers.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../api/posts/constant.js";
import { save } from "../storage/save.js";

export async function login(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);

    window.location.href = "/profile.html";
    return profile;
  }

  throw new Error("Could not login the account");
}
