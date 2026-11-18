
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  UserRound,
  BriefcaseBusiness,
  ClipboardList,
  CalendarCheck,
  FileBarChart,
  Settings,
  LogOut
} from 'lucide-react'

import { useAuth } from '../context/AuthContext'

const adminMenu = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Employees', path: '/employees', icon: Users },
  { name: 'Clients', path: '/clients', icon: UserRound },
  { name: 'Projects', path: '/projects', icon: BriefcaseBusiness },
  { name: 'Tasks', path: '/tasks', icon: ClipboardList },
  { name: 'Attendance', path: '/attendance', icon: CalendarCheck },
  { name: 'Leaves', path: '/leaves', icon: CalendarCheck },
  { name: 'Reports', path: '/reports', icon: FileBarChart },
  { name: 'Settings', path: '/settings', icon: Settings }
]

const employeeMenu = [
  adminMenu[0],
  adminMenu[4],
  adminMenu[5],
  adminMenu[6],
  adminMenu[8]
]

const clientMenu = [
  adminMenu[0],
  adminMenu[3],
  adminMenu[4],
  adminMenu[8]
]

export default function Sidebar({ closeMenu }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const menu = user?.role === 'admin'
    ? adminMenu
    : user?.role === 'employee'
      ? employeeMenu
      : clientMenu

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">

      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">
          SmartOffice
        </h1>
        <p className="text-xs text-slate-400">
          Management Portal
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        <p className="text-xs text-slate-400 uppercase mb-4">
          Main Menu
        </p>

        {menu.map(item => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-500 hover:bg-slate-50'
                }`
              }
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          )
        })}

      </nav>

      <button
        onClick={handleLogout}
        className="p-5 flex gap-3 text-red-500 border-t"
      >
        <LogOut size={19} /> Logout
      </button>

    </aside>
  )
}
