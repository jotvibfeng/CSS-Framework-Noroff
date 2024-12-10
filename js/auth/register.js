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

export async function getAPIKey() {
  const response = await fetch(API_BASE + API_AUTH + API_KEY_URL);

  if (response.ok) {
    return await response.json();
  }

  console.error(await response.json());
  throw new Error("Could not register for an API key!");
}

export async function register(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Could not register the account");
}

export async function onAuth(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  if (event.submitter.dataset.auth === "login") {
    await register(name, email, password);
  } else {
    await register(name, email, password);
  }
}

export function setAuthListener() {
  document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener();
