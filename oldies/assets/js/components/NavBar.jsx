function NavBar({ theme, setTheme, route, setRoute, isAuthed }) {
  function navigate(to) {
    setRoute(to);
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(next);
    saveLS('pm_theme', next);
    setTheme(next);
  }

  function LinkButton({ id, label }) {
    return (
      <button
        className={clsx(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors',
          route === id ? 'bg-slate-800 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        )}
        onClick={() => navigate(id)}
      >
        {label}
      </button>
    );
  }

  React.useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, [route, theme]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-800/60 bg-slate-900/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚽</span>
          <span className="font-bold font-heading">PMxFootball</span>
        </div>
        <nav className="flex items-center gap-1">
          <LinkButton id="/" label="Home" />
          <LinkButton id="/season-2025-26" label="2025/26" />
          <LinkButton id="/coming-soon" label="Coming Soon" />
          <LinkButton id="/admin" label={isAuthed ? 'Admin' : 'Login'} />
          <button
            className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            <i data-lucide="sun-moon" className="w-4 h-4"></i>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}


