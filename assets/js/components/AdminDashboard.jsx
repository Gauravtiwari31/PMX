function AdminDashboard() {
  const stats = [
    { label: 'Total Teams', value: '156', icon: 'users', color: 'text-primary' },
    { label: 'Active Competitions', value: '18', icon: 'trophy', color: 'text-accent' },
    { label: 'Fixtures Processed', value: '2,847', icon: 'calendar', color: 'text-secondary' },
    { label: 'PM Calculations', value: '5,694', icon: 'bar-chart-3', color: 'text-primary' }
  ];

  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold font-heading">Dashboard Overview</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="bg-slate-800/30 rounded-xl p-6 animate-float-delayed" style={{animationDelay: `${i * 0.1}s`}}>
            <div className="flex items-center justify-between mb-4">
              <i data-lucide={stat.icon} className={`w-8 h-8 ${stat.color}`}></i>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


