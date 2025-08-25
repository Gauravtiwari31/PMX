import React from 'react'
import { loadLS } from './utils/utils.js'
import { NavBar } from './components/NavBar.jsx'
import { Home } from './components/Home.jsx'
import { ComingSoonPage } from './components/ComingSoonPage.jsx'
import { Season202526Page } from './components/Season202526Page.jsx'
import { AdminLogin, AdminPanel } from './components/admin/Admin.jsx'
import { LoadingPage } from './components/LoadingPage.jsx'

export function App(){
  const [theme, setTheme] = React.useState(loadLS('pm_theme','dark'));
  const [route, setRoute] = React.useState('/');
  const [loading, setLoading] = React.useState(true);
  const isAuthed = (typeof window !== 'undefined') && sessionStorage.getItem('pm_authed')==='1';

  React.useEffect(() => {
    document.documentElement.classList.add(theme);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  let content = <Home/>;
  if (route === '/coming-soon') content = <ComingSoonPage />;
  else if (route === '/season-2025-26') content = <Season202526Page />;
  else if (route === '/admin') content = isAuthed ? <AdminPanel/> : <AdminLogin onAuthed={()=>setRoute('/admin')} />;

  return (
    <div className="min-h-screen">
      <NavBar theme={theme} setTheme={setTheme} route={route} setRoute={setRoute} isAuthed={isAuthed} />
      {content}
      <footer className="mt-16 py-8 border-t border-primary/20 text-center animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-sm opacity-60">
            © {new Date().getFullYear()} PMxFootball • Redefining Football Performance
          </div>
        </div>
      </footer>
    </div>
  );
}
