import { onAuth } from "../onAuth.js";

export function setAuthListener() {
  document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener();
