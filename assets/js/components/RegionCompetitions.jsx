function RegionCompetitions({ region, onBack, data }) {
  const [selectedComp, setSelectedComp] = React.useState(null);
  const [selectedStageIndex, setSelectedStageIndex] = React.useState(0);
  const competitions = (data && data[region]) || [];

  React.useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, [region, selectedComp, selectedStageIndex]);

  React.useEffect(() => {
    // Reset stage selection whenever we switch competition
    setSelectedStageIndex(0);
  }, [selectedComp]);

  const regionNames = {
    uefa: 'European Competitions (UEFA)',
    england: 'England Competitions', 
    spain: 'Spanish Competitions',
    france: 'France Competitions',
    italy: 'Italian Competitions',
    germany: 'Germany Competitions'
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-0 z-50 animate-fade-in">
      <div className="bg-slate-900 p-8 w-full h-full overflow-y-auto">
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <nav className="text-sm text-slate-400 flex items-center gap-2">
              <a href="index.html" className="hover:text-white">Home</a>
              <span className="opacity-50">/</span>
              <a href="season-2025-26.html" className="hover:text-white">Season 2025/26</a>
              <span className="opacity-50">/</span>
              <button onClick={() => setSelectedComp(null)} className="hover:text-white">
                {regionNames[region]}
              </button>
              {selectedComp && (
                <>
                  <span className="opacity-50">/</span>
                  <span className="text-slate-200">
                    {competitions.find(c => c.key === selectedComp)?.name}
                  </span>
                </>
              )}
            </nav>
            <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors" title="Close">
              <i data-lucide="x" className="w-6 h-6"></i>
            </button>
          </div>
          {competitions.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {competitions.map((comp) => (
                <button
                  key={comp.key}
                  onClick={() => setSelectedComp(comp.key)}
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap',
                    selectedComp === comp.key 
                      ? 'bg-primary/20 border-primary text-white' 
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                  )}
                >
                  {comp.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {!selectedComp ? (
          <div className="grid md:grid-cols-2 gap-4">
            {competitions.map(comp => (
              <button
                key={comp.key}
                onClick={() => setSelectedComp(comp.key)}
                className="card-grad rounded-xl p-6 text-left hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{comp.name}</h3>
                <p className="text-sm text-slate-400">Click to view fixtures</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSelectedComp(null)} className="p-2 hover:bg-slate-800 rounded-xl">
                <i data-lucide="arrow-left" className="w-5 h-5"></i>
              </button>
              <h3 className="text-xl font-semibold">{competitions.find(c => c.key === selectedComp)?.name}</h3>
            </div>

            {(() => {
              const comp = competitions.find(c => c.key === selectedComp);
              const hasStages = comp && Array.isArray(comp.stages) && comp.stages.length > 0;
              const derivedStages = !hasStages
                ? [
                    { name: 'Quarter-final', fixtures: comp?.fixtures || [] },
                    { name: 'Semi-final', fixtures: comp?.fixtures || [] },
                    { name: 'Final', fixtures: comp?.fixtures || [] }
                  ]
                : comp.stages;
              const fixturesToShow = derivedStages[selectedStageIndex]?.fixtures || [];
              const heading = derivedStages[selectedStageIndex]?.name || 'Fixtures';

              return (
                <div className="card-grad rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">{heading}</h4>
                    {derivedStages && derivedStages.length > 0 && (
                      <div className="flex items-center gap-2">
                        {derivedStages.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedStageIndex(idx)}
                            className={clsx(
                              'px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap',
                              selectedStageIndex === idx
                                ? 'bg-primary/20 border-primary text-white'
                                : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50'
                            )}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="space-y-4 overflow-y-auto">
                    {fixturesToShow.map((fixture, i) => (
                      <div key={i} className="flex items-center justify-center p-3 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center justify-between w-full md:w-2/3">
                          <span className="font-semibold text-right pr-4 w-1/3 truncate">{fixture.home}</span>
                          <div className="text-center px-4 w-1/3">
                            <div>{fixture.score}</div>
                            <div className="text-sm text-slate-400">PM: {fixture.pm}</div>
                          </div>
                          <span className="font-semibold text-left pl-4 w-1/3 truncate">{fixture.away}</span>
                        </div>
                      </div>
                    ))}
                    {fixturesToShow.length === 0 && (
                      <p className="text-slate-400 text-sm text-center">No fixtures added yet</p>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}


