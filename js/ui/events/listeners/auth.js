import { onAuth } from "../onAuth.js";
import { onAuthLogin } from "../onAuthLogin.js";

/**
 * Sets up the authentication listener on the auth form.
 * @function setAuthListener
 */
export function setAuthListener() {
  document.forms.auth.addEventListener("submit", (event) => {
    onAuth(event);
    onAuthLogin(event);
  });
}

// Initialize the authentication listener
setAuthListener();
