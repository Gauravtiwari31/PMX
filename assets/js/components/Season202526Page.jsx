function Season202526Page() {
  const [loading, setLoading] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState(null);
  const [seasonData, setSeasonData] = React.useState(null);
  const [loadError, setLoadError] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  function fetchSeasonData() {
    setLoadError(null);
    fetch('./assets/data/seasons/2025-26/fixtures.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load fixtures.json');
        return res.json();
      })
      .then((json) => setSeasonData(json))
      .catch((err) => setLoadError(err.message || 'Error loading data'));
  }

  React.useEffect(() => { fetchSeasonData(); }, []);

  if (loadError) {
    return (
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="card-grad rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2 font-heading">Failed to load season data</h2>
          <p className="text-slate-400 mb-4">{loadError}</p>
          <button onClick={fetchSeasonData} className="px-4 py-2 rounded-md bg-primary text-white hover:opacity-90">
            Retry
          </button>
        </div>
      </main>
    );
  }

  if (loading || !seasonData) return <LoadingPage />;

  const regions = [
    { key: 'uefa', name: 'European Competitions (UEFA)', icon: '🇪🇺', color: 'bg-primary' },
    { key: 'england', name: 'English Competitions', icon: '🏴', color: 'bg-secondary' },
    { key: 'spain', name: 'Spanish Competitions', icon: '🇪🇸', color: 'bg-accent' },
    { key: 'france', name: 'French Competitions', icon: '🇫🇷', color: 'bg-primary' },
    { key: 'italy', name: 'Italian Competitions', icon: '🇮🇹', color: 'bg-secondary' },
    { key: 'germany', name: 'German Competitions', icon: '🇩🇪', color: 'bg-accent' }
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
              <div className="mb-4 animate-bounce-gentle flex items-center justify-center">
                <img src={
                  region.key === 'uefa' ? './assets/img/flags/eu.svg' :
                  region.key === 'england' ? './assets/img/flags/gb-eng.svg' :
                  region.key === 'spain' ? './assets/img/flags/es.svg' :
                  region.key === 'france' ? './assets/img/flags/fr.svg' :
                  region.key === 'italy' ? './assets/img/flags/it.svg' :
                  region.key === 'germany' ? './assets/img/flags/de.svg' : ''
                } alt="flag" className="w-16 h-10 object-cover rounded shadow" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-4">{region.name}</h3>
              <div className={`w-full h-1 ${region.color} rounded mb-4 animate-pulse`}></div>
              <p className="text-sm text-slate-400">Click to view competitions</p>
            </div>
          </div>
        ))}
      </div>

      {selectedRegion && (
        <RegionCompetitions 
          region={selectedRegion} 
          onBack={() => setSelectedRegion(null)} 
          data={seasonData}
        />
      )}
    </main>
  );
}


