/**
 * Displays the user profile on the page.
 * @function displayUserProfile
 * @param {Object} profile - The profile object containing user information.
 */
export function displayUserProfile(profile) {
  const profileUserDiv = document.getElementById("profile-user");
  profileUserDiv.innerHTML = createHTML(profile);
}

/**
 * Creates the HTML for the user profile.
 * @function createHTML
 * @param {Object} profile - The profile object containing user information.
 * @returns {string} The HTML string for the user profile.
 */
function createHTML(profile) {
  return `
      <div class="bg-white w-custom rounded-lg shadow-md p-4 mx-auto mb-6">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="relative"></div>
  
          <!-- Profile Info -->
          <div class="flex-1 text-center md:text-left font-rob">
            <h1 class="text-2xl font-bold mb-2">${profile.name}</h1>
            <p class="text-gray-600 mb-4">@${profile.email}</p>
  
            <!-- Stats -->
            <div class="flex justify-center md:justify-start gap-6 mb-4">
              <div class="text-center">
                <p class="font-bold">${profile._count.posts}</p>
                <p class="text-gray-600 text-sm">Posts</p>
              </div>
              <div class="text-center">
                <p class="font-bold">${profile._count.followers}</p>
                <p class="text-gray-600 text-sm">Followers</p>
              </div>
              <div class="text-center">
                <p class="font-bold">${profile._count.following}</p>
                <p class="text-gray-600 text-sm">Following</p>
              </div>
            </div>
  
            <button
              type="submit"
              class="px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-300 transition-colors"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    `;
}
