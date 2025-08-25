// Sample data for 2025/26 season competitions
const SEASON_2025_26_DATA = {
    uefa: [
      { key: 'ucl_25_26', name: 'UEFA Champions League', 
        teams: ["Arsenal", "Real Madrid", "Bayern München", "Inter", "Barcelona", "Dortmund", "PSG", "Aston Villa"],
        fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] 
      },
      { key: 'uel_25_26', name: 'UEFA Europa League', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'usup_25_26', name: 'UEFA Super Cup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ],
    england: [
      { key: 'epl_25_26', name: 'Premier League', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'facup_25_26', name: 'FA Cup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'carabao_25_26', name: 'Carabao Cup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'cs_25_26', name: 'Community Shield', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ],
    spain: [
      { key: 'laliga_25_26', name: 'La Liga', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'cdr_25_26', name: 'Copa del Rey', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'ss_25_26', name: 'Spanish Supercup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ],
    france: [
      { key: 'ligue1_25_26', name: 'Ligue 1', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'cdf_25_26', name: 'Coupe de France', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'fs_25_26', name: 'French Supercup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ],
    italy: [
      { key: 'seriea_25_26', name: 'Serie A', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'coppa_25_26', name: 'Coppa Italia', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'is_25_26', name: 'Italian Supercup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ],
    germany: [
      { key: 'bundes_25_26', name: 'Bundesliga', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'dfb_25_26', name: 'DFB Pokal', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] },
      { key: 'gs_25_26', name: 'German Supercup', teams: [], fixtures: [
          { home: 'Arsenal', score: '3-0', away: 'Real Madrid', pm: '85-72' },
          { home: 'Bayern München', score: '1-2', away: 'Inter', pm: '78-82' },
          { home: 'Barcelona', score: '4-0', away: 'Dortmund', pm: '92-65' },
          { home: 'PSG', score: '3-1', away: 'Aston Villa', pm: '88-76' },
          { home: 'Aston Villa', score: '3-2', away: 'PSG', pm: '84-81' },
          { home: 'Dortmund', score: '3-1', away: 'Barcelona', pm: '87-79' }
        ] }
    ]
  };
  