import React from 'react'
import { LoadingPage } from '../LoadingPage.jsx'
import { clsx } from '../../utils/utils.js'
import { Plus, CalendarPlus, Upload, Download, Edit2, Trash2 } from 'lucide-react'

export function AdminLogin({ onAuthed }){
  const [loading, setLoading] = React.useState(true);
  const [u,setU] = React.useState(''); 
  const [p,setP] = React.useState(''); 
  const [err,setErr] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  const tryLogin = () => {
    if(u === 'admin' && p === 'pm-strong-pass'){ 
      sessionStorage.setItem('pm_authed','1'); 
      onAuthed(true); 
    } else {
      setErr('Invalid credentials');
    }
  };

  return (
    <main className="min-h-[70vh] container mx-auto px-4 flex items-center justify-center animate-fade-in">
      <div className="w-full max-w-md card-grad rounded-2xl p-8 animate-float">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-heading">Admin Access</h2>
          <p className="text-slate-400 mt-2">Enter your credentials to continue</p>
        </div>
        
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-primary/20 focus:border-primary transition-colors font-body" placeholder="Username" value={u} onChange={e=>setU(e.target.value)} />
          <input type="password" className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-primary/20 focus:border-primary transition-colors font-body" placeholder="Password" value={p} onChange={e=>setP(e.target.value)} onKeyDown={e => e.key === 'Enter' && tryLogin()} />
          {err && <div className="text-red-400 text-sm animate-bounce-gentle">{err}</div>}
          <button onClick={tryLogin} className="w-full py-3 rounded-xl bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 font-body font-semibold">Sign In</button>
          <p className="text-xs text-slate-400 text-center">Demo credentials: admin / pm-strong-pass</p>
        </div>
      </div>
    </main>
  );
}

export function AdminPanel(){
  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState('dashboard');
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'teams', label: 'Teams' },
    { id: 'fixtures', label: 'Fixtures' },
    { id: 'stats', label: 'Statistics' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading animate-slide-in">Admin Panel</h1>
        <p className="text-slate-400">Manage competitions, teams, and performance data</p>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)} className={clsx('px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-105', tab===t.id ? 'bg-primary text-white shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700/50')}>
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

function AdminDashboard() {
  const stats = [
    { label: 'Total Teams', value: '156', color: 'text-primary' },
    { label: 'Active Competitions', value: '18', color: 'text-accent' },
    { label: 'Fixtures Processed', value: '2,847', color: 'text-secondary' },
    { label: 'PM Calculations', value: '5,694', color: 'text-primary' }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold font-heading">Dashboard Overview</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="bg-slate-800/30 rounded-xl p-6 animate-float-delayed" style={{animationDelay: `${i * 0.1}s`}}>
            <div className="flex items-center justify-between mb-4">
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
              { label: 'Add Team', icon: Plus },
              { label: 'New Fixture', icon: CalendarPlus },
              { label: 'Import Data', icon: Upload },
              { label: 'Export Report', icon: Download }
            ].map((action, i) => (
              <button key={action.label} className="p-4 bg-slate-700/30 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-105">
                <action.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-xs">{action.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminTeams() {
  const [teams, setTeams] = React.useState([
    { id: 1, name: 'Manchester City', competition: 'Premier League', players: 25 },
    { id: 2, name: 'Arsenal', competition: 'Premier League', players: 24 },
    { id: 3, name: 'Liverpool', competition: 'Premier League', players: 26 }
  ]);
  const [showForm, setShowForm] = React.useState(false);
  const [newTeam, setNewTeam] = React.useState({ name: '', competition: '', players: '' });

  const addTeam = () => {
    if (newTeam.name && newTeam.competition) {
      setTeams([...teams, { id: Date.now(), name: newTeam.name, competition: newTeam.competition, players: parseInt(newTeam.players) || 0 }]);
      setNewTeam({ name: '', competition: '', players: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-heading">Team Management</h2>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Team
        </button>
      </div>

      {showForm && (
        <div className="bg-slate-800/30 rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Add New Team</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <input placeholder="Team Name" value={newTeam.name} onChange={e => setNewTeam({...newTeam, name: e.target.value})} className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors" />
            <input placeholder="Competition" value={newTeam.competition} onChange={e => setNewTeam({...newTeam, competition: e.target.value})} className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors" />
            <input placeholder="Number of Players" type="number" value={newTeam.players} onChange={e => setNewTeam({...newTeam, players: e.target.value})} className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors" />
          </div>
          <div className="flex gap-3">
            <button onClick={addTeam} className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-colors">Save Team</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4">Team</th>
              <th className="text-left py-3 px-4">Competition</th>
              <th className="text-left py-3 px-4">Players</th>
              <th className="text-right py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <tr key={team.id} className="border-b border-slate-800/40 hover:bg-slate-800/20 animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                <td className="py-4 px-4 font-semibold">{team.name}</td>
                <td className="py-4 px-4 text-slate-400">{team.competition}</td>
                <td className="py-4 px-4">{team.players}</td>
                <td className="py-4 px-4 text-right">
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors mr-2"><Edit2 className="w-4 h-4 text-primary" /></button>
                  <button onClick={() => setTeams(teams.filter(t => t.id !== team.id))} className="p-2 hover:bg-slate-700 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminFixtures(){
  const [fixtures, setFixtures] = React.useState([
    { id: 1, home: 'Manchester City', away: 'Arsenal', date: '2025-09-15', status: 'Scheduled' },
    { id: 2, home: 'Liverpool', away: 'Chelsea', date: '2025-09-22', status: 'Completed' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-heading">Fixture Management</h2>
        <button className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
          <CalendarPlus className="w-4 h-4" />
          Add Fixture
        </button>
      </div>

      <div className="grid gap-4">
        {fixtures.map((fixture, i) => (
          <div key={fixture.id} className="bg-slate-800/30 rounded-xl p-6 animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-lg font-semibold">{fixture.home} vs {fixture.away}</div>
                <div className={`px-3 py-1 rounded-full text-xs ${fixture.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {fixture.status}
                </div>
              </div>
              <div className="text-slate-400">{fixture.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminStats(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-heading">Statistics Management</h2>
      
      <div className="bg-slate-800/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics Input</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            'Goals', 'Shots', 'Shots on Target', 'Expected Goals (xG)', 
            'Possession %', 'Passes', 'Fouls', 'Yellow Cards', 'Red Cards'
          ].map((metric, i) => (
            <div key={metric} className="p-4 bg-slate-700/30 rounded-xl animate-fade-in" style={{animationDelay: `${i * 0.05}s`}}>
              <label className="block text-sm text-slate-400 mb-2">{metric}</label>
              <input type="number" className="w-full px-3 py-2 bg-slate-600/50 border border-primary/20 rounded-lg focus:border-primary transition-colors" placeholder="0" />
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-3 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105">Calculate PM Index</button>
      </div>
    </div>
  );
}

function AdminSettings(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-heading">System Settings</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">PM Algorithm Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Goals Weight</label>
              <input type="range" min="1" max="10" className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Possession Weight</label>
              <input type="range" min="1" max="10" className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Defensive Weight</label>
              <input type="range" min="1" max="10" className="w-full" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Data Management</h3>
          <div className="space-y-3">
            <button className="w-full p-3 bg-slate-700/50 hover:bg-primary/20 rounded-xl transition-colors text-left"><Upload className="w-4 h-4 inline mr-2" />Import CSV Data</button>
            <button className="w-full p-3 bg-slate-700/50 hover:bg-primary/20 rounded-xl transition-colors text-left"><Download className="w-4 h-4 inline mr-2" />Export Database</button>
            <button className="w-full p-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-xl transition-colors text-left"><Trash2 className="w-4 h-4 inline mr-2" />Reset All Data</button>
          </div>
        </div>
      </div>
    </div>
  );
}
