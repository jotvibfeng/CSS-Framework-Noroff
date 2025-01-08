import { onAuth } from "../onAuth.js";
import { onAuthLogin } from "../onAuthLogin.js";

export function setAuthListener() {
  document.forms.auth.addEventListener("submit", onAuth);
  document.forms.auth.addEventListener("submit", onAuthLogin);
}

setAuthListener();
