import React from 'react'
import { clsx } from '../utils/utils.js'
import { Sun, Moon, Lock, Football } from 'lucide-react'

export function NavBar({ theme, setTheme, route, setRoute, isAuthed }){
  const Item = ({label, to, onClick}) => (
    <button 
      onClick={onClick || (()=>setRoute(to))} 
      className={clsx(
        'px-4 py-2 rounded-xl transition-all duration-300 font-body hover:scale-105',
        route===to ? 'bg-primary/20 text-primary font-semibold shadow-lg' : 'hover:bg-white/10'
      )}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-40 glass border-b border-primary/20 animate-slide-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 py-4">
          <div className="flex items-center gap-2 text-primary animate-float">
            <Football className="w-7 h-7" />
            <span className="font-bold font-heading text-xl">PMxFootball</span>
          </div>
          <div className="flex-1"></div>
          <nav className="hidden md:flex gap-2">
            <Item label="Home" to="/" />
            <Item label="2024/25" to="/coming-soon" />
            <Item label="2025/26" to="/season-2025-26" />
            <Item label="Admin" to="/admin" />
          </nav>
          <div className="flex items-center gap-3">
            <button 
              onClick={()=>{
                const next = theme==='dark'?'light':'dark';
                setTheme(next);
                document.documentElement.classList.remove('dark','light');
                document.documentElement.classList.add(next);
                localStorage.setItem('pm_theme', next);
              }} 
              className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              {theme==='dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button 
              onClick={()=>setRoute('/admin')} 
              className="px-4 py-2 rounded-xl bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 font-body"
            >
              <Lock className="w-4 h-4 inline mr-2" />
              Admin
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
