export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('profile')
  window.location.href = '/feed.html'
}
