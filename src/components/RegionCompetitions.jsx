import React from 'react'
import { SEASON_2025_26_DATA } from '../data/season-2025-26.js'
import { ArrowLeft, X } from 'lucide-react'

export function RegionCompetitions({ region, onBack }) {
  const competitions = SEASON_2025_26_DATA[region] || [];
  const [selectedComp, setSelectedComp] = React.useState(null);

  const regionNames = {
    uefa: 'European Competitions (UEFA)',
    england: 'England Competitions',
    spain: 'Spanish Competitions',
    france: 'France Competitions',
    italy: 'Italian Competitions',
    germany: 'Germany Competitions'
  };

  const current = competitions.find(c => c.key === selectedComp);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-0 z-50 animate-fade-in">
      <div className="bg-slate-900 p-8 w-full h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-heading">{regionNames[region]}</h2>
          <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-xl transition-colors">
            <X className="w-6 h-6" />
          </button>
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
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-semibold">{current?.name}</h3>
            </div>

            <div className="card-grad rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Fixtures</h4>
              </div>
              <div className="space-y-4 overflow-y-auto">
                <h5 className="text-xl font-bold text-center">Quarter-final</h5>

                {current?.fixtures?.map((fixture, i) => (
                  <div key={i} className="flex items-center justify-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between w-1/2">
                      <span className="font-semibold text-right pr-4">{fixture.home}</span>
                      <div className="text-center px-4">
                        <div>{fixture.score}</div>
                        <div className="text-sm text-slate-400">PM: {fixture.pm}</div>
                      </div>
                      <span className="font-semibold text-left pl-4">{fixture.away}</span>
                    </div>
                  </div>
                ))}

                {(current?.fixtures?.length ?? 0) === 0 && (
                  <p className="text-slate-400 text-sm text-center">No fixtures added yet</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
