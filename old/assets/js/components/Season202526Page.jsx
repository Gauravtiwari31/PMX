function Season202526Page() {
    const [loading, setLoading] = React.useState(true);
    const [selectedRegion, setSelectedRegion] = React.useState(null);
  
    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingPage />;
  
    const regions = [
      { key: 'uefa', name: 'European Competitions (UEFA)', icon: '🇪🇺', color: 'bg-primary' },
      { key: 'england', name: 'England Competitions', icon: '🏴', color: 'bg-secondary' },
      { key: 'spain', name: 'Spanish Competitions', icon: '🇪🇸', color: 'bg-accent' },
      { key: 'france', name: 'France Competitions', icon: '🇫🇷', color: 'bg-primary' },
      { key: 'italy', name: 'Italian Competitions', icon: '🇮🇹', color: 'bg-secondary' },
      { key: 'germany', name: 'Germany Competitions', icon: '🇩🇪', color: 'bg-accent' }
    ];
  
    return (
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-heading animate-slide-in">Season 2025/26</h1>
          <p className="text-xl text-slate-400 animate-fade-in">Select a region to explore competitions</p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <div 
              key={region.key}
              className="card-grad rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-float-slow"
              style={{animationDelay: `${i * 0.1}s`}}
              onClick={() => setSelectedRegion(region.key)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce-gentle">{region.icon}</div>
                <h3 className="text-xl font-semibold font-heading mb-4">{region.name}</h3>
                <div className={`w-full h-1 ${region.color} rounded mb-4 animate-pulse`}></div>
                <p className="text-sm text-slate-400">Click to view competitions</p>
              </div>
            </div>
          ))}
        </div>
  
        {selectedRegion && <RegionCompetitions region={selectedRegion} onBack={() => setSelectedRegion(null)} />}
      </main>
    );
  }
  