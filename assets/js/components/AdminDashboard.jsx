function AdminDashboard() {
    const stats = [
      { label: 'Total Teams', value: '156', icon: 'users', color: 'text-primary' },
      { label: 'Active Competitions', value: '18', icon: 'trophy', color: 'text-accent' },
      { label: 'Fixtures Processed', value: '2,847', icon: 'calendar', color: 'text-secondary' },
      { label: 'PM Calculations', value: '5,694', icon: 'bar-chart-3', color: 'text-primary' }
    ];
  
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
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                'New fixture added: Arsenal vs Chelsea',
                'Team statistics updated: Manchester City',
                'PM calculations completed for Premier League',
                'Competition data imported: La Liga'
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-slate-800/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Add Team', icon: 'user-plus' },
                { label: 'New Fixture', icon: 'calendar-plus' },
                { label: 'Import Data', icon: 'upload' },
                { label: 'Export Report', icon: 'download' }
              ].map((action) => (
                <button key={action.label} className="p-4 bg-slate-700/30 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-105">
                  <i data-lucide={action.icon} className="w-6 h-6 mx-auto mb-2 text-primary"></i>
                  <div className="text-xs">{action.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  