function AdminTeams() {
  const [teams, setTeams] = React.useState([
    { id: 1, name: 'Manchester City', competition: 'Premier League', players: 25 },
    { id: 2, name: 'Arsenal', competition: 'Premier League', players: 24 },
    { id: 3, name: 'Liverpool', competition: 'Premier League', players: 26 }
  ]);
  const [showForm, setShowForm] = React.useState(false);
  const [newTeam, setNewTeam] = React.useState({ name: '', competition: '', players: '' });

  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); });

  const addTeam = () => {
    if (newTeam.name && newTeam.competition) {
      setTeams([...teams, { 
        id: Date.now(), 
        name: newTeam.name, 
        competition: newTeam.competition, 
        players: parseInt(newTeam.players) || 0 
      }]);
      setNewTeam({ name: '', competition: '', players: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-heading">Team Management</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <i data-lucide="plus" className="w-4 h-4"></i>
          Add Team
        </button>
      </div>

      {showForm && (
        <div className="bg-slate-800/30 rounded-xl p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">Add New Team</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <input
              placeholder="Team Name"
              value={newTeam.name}
              onChange={e => setNewTeam({...newTeam, name: e.target.value})}
              className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors"
            />
            <input
              placeholder="Competition"
              value={newTeam.competition}
              onChange={e => setNewTeam({...newTeam, competition: e.target.value})}
              className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors"
            />
            <input
              placeholder="Number of Players"
              type="number"
              value={newTeam.players}
              onChange={e => setNewTeam({...newTeam, players: e.target.value})}
              className="px-4 py-3 bg-slate-700/50 border border-primary/20 rounded-xl focus:border-primary transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <button onClick={addTeam} className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-colors">
              Save Team
            </button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl transition-colors">
              Cancel
            </button>
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
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors mr-2">
                    <i data-lucide="edit-2" className="w-4 h-4 text-primary"></i>
                  </button>
                  <button 
                    onClick={() => setTeams(teams.filter(t => t.id !== team.id))}
                    className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <i data-lucide="trash-2" className="w-4 h-4 text-red-400"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


