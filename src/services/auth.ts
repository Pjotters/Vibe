const API_URL = process.env.NEXT_PUBLIC_API_URL

export const authService = {
  async register(username: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
    return response.json()
  },

  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    return response.json()
  },

  setToken(token: string) {
    localStorage.setItem('token', token)
  },

  getToken() {
    return localStorage.getItem('token')
  },

  logout() {
    localStorage.removeItem('token')
  },
} 