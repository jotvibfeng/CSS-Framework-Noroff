import { logout } from './ui/events/logout.js'
import { load } from './storage/load.js'

const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#mobile-menu')

const isLoggedIn = Boolean(load('token'))

document.querySelectorAll('.login-link').forEach((loginLink) => {
  loginLink.classList.toggle('hidden', isLoggedIn)
})

document.querySelectorAll('.logout-btn').forEach((logoutButton) => {
  logoutButton.classList.toggle('hidden', !isLoggedIn)
  logoutButton.addEventListener('click', logout)
})

btn?.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
