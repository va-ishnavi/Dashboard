
import {
  Users,
  UserRound,
  BriefcaseBusiness,
  ClipboardCheck
} from 'lucide-react'

import StatCard from '../components/StatCard'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  const stats = [
    {
      title: 'Total Employees',
      value: '120',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Total Clients',
      value: '48',
      icon: UserRound,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Active Projects',
      value: '24',
      icon: BriefcaseBusiness,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Completed Tasks',
      value: '86',
      icon: ClipboardCheck,
      color: 'bg-emerald-100 text-emerald-600'
    }
  ]

  return (
    <div className="p-5 md:p-8">

      <h1 className="text-2xl font-bold">
        {user?.role === 'admin'
          ? 'Admin Dashboard'
          : user?.role === 'employee'
            ? 'Employee Dashboard'
            : 'Client Dashboard'}
      </h1>

      <p className="text-slate-500 mt-2 mb-7">
        Here's your latest management overview.
      </p>

      {user?.role === 'admin' && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map(stat => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      )}

      {user?.role === 'employee' && (
        <div className="grid sm:grid-cols-2 gap-5">
          <StatCard title="My Tasks" value="12" icon={ClipboardCheck} color="bg-blue-100 text-blue-600" />
          <StatCard title="Completed Tasks" value="8" icon={BriefcaseBusiness} color="bg-emerald-100 text-emerald-600" />
        </div>
      )}

      {user?.role === 'client' && (
        <div className="grid sm:grid-cols-2 gap-5">
          <StatCard title="My Projects" value="3" icon={BriefcaseBusiness} color="bg-blue-100 text-blue-600" />
          <StatCard title="Completed Projects" value="1" icon={ClipboardCheck} color="bg-emerald-100 text-emerald-600" />
        </div>
      )}

      <div className="bg-white rounded-xl border p-6 mt-8">
        <h2 className="font-bold text-lg mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4 text-sm text-slate-600">
          <p>• New employee Rahul Sharma joined the company.</p>
          <p>• Website development project updated.</p>
          <p>• Three tasks marked as completed.</p>
          <p>• New client added to the system.</p>
        </div>
      </div>

    </div>
  )
}
