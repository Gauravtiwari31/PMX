function App(){
  const [theme, setTheme] = React.useState(loadLS('pm_theme','dark'));
  const [route, setRoute] = React.useState('/');
  const [loading, setLoading] = React.useState(true);
  const isAuthed = false;

  // Hash-based routing for GitHub Pages
  React.useEffect(() => {
    const initial = window.location.hash.replace('#','') || '/';
    setRoute(initial);
    const onHashChange = () => setRoute(window.location.hash.replace('#','') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => { 
    if (window.lucide) window.lucide.createIcons(); 
  }, [route, theme]);

  const setRouteAndHash = (to) => {
    if (window.location.hash !== `#${to}`) window.location.hash = to;
    setRoute(to);
  };

  if (loading) return <LoadingPage />;

  let content = <Home/>;
  if (route === '/coming-soon') {
    content = <ComingSoonPage />;
  } else if (route === '/season-2025-26') {
    content = <Season202526Page />;
  } else if (route === '/fixtures') {
    content = <Fixtures />;
  } else if (route === '/teams') {
    content = <Teams />;
  } else if (route === '/stats') {
    content = <Stats />;
  }

  return (
    <div className="min-h-screen">
      <NavBar 
        theme={theme} 
        setTheme={setTheme} 
        route={route} 
        setRoute={(to)=>setRouteAndHash(to)} 
        isAuthed={isAuthed} 
      />
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


