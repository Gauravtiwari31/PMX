function AdminFixtures() {
    const [fixtures, setFixtures] = React.useState([
      { id: 1, home: 'Manchester City', away: 'Arsenal', date: '2025-09-15', status: 'Scheduled' },
      { id: 2, home: 'Liverpool', away: 'Chelsea', date: '2025-09-22', status: 'Completed' }
    ]);
  
    React.useEffect(()=>{ lucide.createIcons(); });
  
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-heading">Fixture Management</h2>
          <button className="px-4 py-2 bg-primary hover:bg-secondary rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <i data-lucide="calendar-plus" className="w-4 h-4"></i>
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
  