import { onAuth } from '../onAuth.js'
import { onAuthLogin } from '../onAuthLogin.js'

export function setAuthListener() {
  document.forms.auth.addEventListener('submit', async (event) => {
    if (event.currentTarget.elements.name) {
      await onAuth(event) // register form has a name field
    } else {
      await onAuthLogin(event) // login form has no name field
    }
  })
}
