function AdminStats(){
  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); });
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
              <input 
                type="number" 
                className="w-full px-3 py-2 bg-slate-600/50 border border-primary/20 rounded-lg focus:border-primary transition-colors"
                placeholder="0"
              />
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-3 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105">
          Calculate PM Index
        </button>
      </div>
    </div>
  );
}

function AdminSettings(){
  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); });
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
            <button className="w-full p-3 bg-slate-700/50 hover:bg-primary/20 rounded-xl transition-colors text-left">
              <i data-lucide="upload" className="w-4 h-4 inline mr-2"></i>
              Import CSV Data
            </button>
            <button className="w-full p-3 bg-slate-700/50 hover:bg-primary/20 rounded-xl transition-colors text-left">
              <i data-lucide="download" className="w-4 h-4 inline mr-2"></i>
              Export Database
            </button>
            <button className="w-full p-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-xl transition-colors text-left">
              <i data-lucide="trash-2" className="w-4 h-4 inline mr-2"></i>
              Reset All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


