function NavBar({ theme, setTheme, route, setRoute, isAuthed }) {
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('dark','light');
    document.documentElement.classList.add(next);
    saveLS('pm_theme', next);
    setTheme(next);
  }

  function LinkButton({ href, label }) {
    return (
      <a
        className={clsx(
          'px-3 py-2 rounded-md text-sm font-medium transition-colors',
          'text-slate-300 hover:text-white hover:bg-slate-800'
        )}
        href={href}
      >
        {label}
      </a>
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
          <LinkButton href="index.html" label="Home" />
          <LinkButton href="coming-soon.html" label="2024/25" />
          <LinkButton href="season-2025-26.html" label="2025/26" />
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


