import { API_BASE, API_POSTS } from '../api/posts/constant.js'
import { headers } from '../api/headers.js'
import { displayPosts } from './displayPosts.js'
import { load } from '../storage/load.js'

function showLoginPrompt() {
  const postsContainer = document.getElementById('postsContainer')
  postsContainer.innerHTML = `
    <p class="p-4 text-center text-red-500">
      Please log in to view posts.
    </p>
    <a
      href="/login.html"
      class="block text-center text-teal-600 font-semibold"
    >
      Go to login
    </a>
  `
}

export async function fetchPosts() {
  if (!load('token')) {
    showLoginPrompt()
    return
  }

  try {
    const tag = document.getElementById('sortSelect').value
    let url = `${API_BASE + API_POSTS}?_author=true`

    if (tag && tag !== '[]') {
      url += `&_tag=${tag}`
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: headers(true),
    })

    if (!response.ok) {
      if (response.status === 401) {
        showLoginPrompt()
        return
      }

      throw new Error('Failed to fetch posts')
    }

    const responseData = await response.json()
    const posts = responseData.data || responseData

    if (!Array.isArray(posts)) {
      console.error('API response is not an array:', posts)
      return
    }

    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    displayPosts(posts)
  } catch (error) {
    console.error('Error in fetchPosts:', error)
  }
}

/**
 * Fetches posts from the API and displays them.
 * @async
 * @function fetchPosts
 */
export async function fetchImages() {
  try {
    const response = await fetch(`${API_BASE + API_POSTS}`, {
      headers: headers(true),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const result = await response.json()
    const posts = result.data
    displayPosts(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
