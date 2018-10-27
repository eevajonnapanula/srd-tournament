const isBrowser = typeof window !== `undefined`

const getUser = () =>
  localStorage.gatsbyUser
    ? JSON.parse(localStorage.gatsbyUser)
    : {}

const setUser = user => (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ password }) => {
  if (!isBrowser) return false

  if (password === process.env.GATSBY_PASSWORD) {
    return setUser({
      loggedIn: true,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  return !!user.loggedIn
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}
