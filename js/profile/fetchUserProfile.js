import { API_BASE, API_POSTS_PROFILE } from '../api/posts/constant.js'
import { headers } from '../api/headers.js'
import { load } from '../storage/load.js'
import { fetchUserPosts } from './fetchUserPosts.js'
import { displayUserProfile } from './displayUserProfile.js'

/**
 * Fetches the user profile from the API and displays it.
 * If the profile is not found or missing a name, redirects to the profile page.
 * @async
 * @function fetchUserProfile
 */
export async function fetchUserProfile() {
  const profile = load('profile')
  if (!profile || !profile.name) {
    const profileContainer = document.getElementById('profile-user')

    profileContainer.innerHTML = `
    <p class="p-4 text-center text-red-500">
      No profile is logged in. Please log in to continue.
    </p>
  `

    return
  }

  const profileName = profile.name
  const profileUrl = `${API_BASE + API_POSTS_PROFILE}/${profileName}`

  try {
    const response = await fetch(profileUrl, {
      method: 'GET',
      headers: headers(true),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch user profile')
    }

    const userProfileResponse = await response.json()
    const userProfile = userProfileResponse.data
    displayUserProfile(userProfile)
    fetchUserPosts(profileName)
  } catch (error) {
    console.error('Error fetching user profile:', error)
  }
}
