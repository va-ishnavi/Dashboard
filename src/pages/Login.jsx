
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LockKeyhole, Mail, Building2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('admin@office.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (login(email, password)) {
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="flex justify-center mb-5">
          <div className="bg-blue-600 text-white p-4 rounded-xl">
            <Building2 size={30} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center">
          SmartOffice
        </h1>

        <p className="text-slate-500 text-center mt-2 mb-8">
          Sign in to your management portal
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center border rounded-lg px-3 mt-2">
              <Mail size={18} className="text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-3 outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3 mt-2">
              <LockKeyhole size={18} className="text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-3 outline-none"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Sign In
          </button>

        </form>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg text-xs text-blue-700 space-y-1">
          <p>Admin: admin@office.com / admin123</p>
          <p>Employee: employee@office.com / emp123</p>
          <p>Client: client@office.com / client123</p>
        </div>

      </div>
    </div>
  )
}
