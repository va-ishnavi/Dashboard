
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const demoUsers = [
  {
    email: 'admin@office.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin'
  },
  {
    email: 'employee@office.com',
    password: 'emp123',
    name: 'Rahul Sharma',
    role: 'employee'
  },
  {
    email: 'client@office.com',
    password: 'client123',
    name: 'Client User',
    role: 'client'
  }
]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('officeUser')) || null
  })

  function login(email, password) {
    const foundUser = demoUsers.find(
      u => u.email === email && u.password === password
    )

    if (!foundUser) return false

    const { password: _, ...safeUser } = foundUser

    localStorage.setItem('officeUser', JSON.stringify(safeUser))
    setUser(safeUser)

    return true
  }

  function logout() {
    localStorage.removeItem('officeUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
