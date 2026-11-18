
import { Bell, Menu } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth()

  return (
    <header className="h-20 bg-white border-b px-5 md:px-8 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu />
        </button>

        <h2 className="font-semibold text-slate-700">
          Welcome, {user?.name}
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={21} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
          {user?.name?.charAt(0)}
        </div>
      </div>

    </header>
  )
}

