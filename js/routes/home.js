import { setAuthListener } from "../ui/events/listeners/auth.js";

/**
 * Initializes the home page by setting up the authentication listener.
 * @async
 * @function homePage
 */
export async function homePage() {
  setAuthListener();
}
