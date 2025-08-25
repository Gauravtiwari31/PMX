function AdminPanel(){
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState('dashboard');

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); }, [tab]);

  if (loading) return <LoadingPage />;

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
    { id: 'teams', label: 'Teams', icon: 'users' },
    { id: 'fixtures', label: 'Fixtures', icon: 'calendar' },
    { id: 'stats', label: 'Statistics', icon: 'bar-chart-3' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading animate-slide-in">Admin Panel</h1>
        <p className="text-slate-400">Manage competitions, teams, and performance data</p>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map(t => (
          <button 
            key={t.id} 
            onClick={()=>setTab(t.id)} 
            className={clsx(
              'px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-105',
              tab===t.id ? 'bg-primary text-white shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700/50'
            )}
          >
            <i data-lucide={t.icon} className="w-4 h-4"></i>
            {t.label}
          </button>
        ))}
      </div>

      <div className="card-grad rounded-2xl p-8 animate-float-slow">
        {tab === 'dashboard' && <AdminDashboard />}
        {tab === 'teams' && <AdminTeams />}
        {tab === 'fixtures' && <AdminFixtures />}
        {tab === 'stats' && <AdminStats />}
        {tab === 'settings' && <AdminSettings />}
      </div>
    </main>
  );
}


