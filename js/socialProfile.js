import { fetchUserProfile } from "./profile/fetchUserProfile.js";

/**
 * Initializes the social profile page by fetching and displaying the user profile.
 * @function initializeSocialProfile
 */
function initializeSocialProfile() {
  fetchUserProfile();
}

// Initialize the social profile page when the script is loaded
initializeSocialProfile();
