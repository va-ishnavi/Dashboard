
export default function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold mt-3">{value}</h2>
        </div>

        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={25} />
        </div>
      </div>

    </div>
  )
}
