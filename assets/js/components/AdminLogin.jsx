function AdminLogin({ onAuthed }){
    const [loading, setLoading] = React.useState(true);
    const [u,setU] = React.useState(''); 
    const [p,setP] = React.useState(''); 
    const [err,setErr] = React.useState('');
  
    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <LoadingPage />;
  
    const tryLogin = () => {
      if(u === 'admin' && p === 'pm-strong-pass'){ 
        sessionStorage.setItem('pm_authed','1'); 
        onAuthed(true); 
      } else {
        setErr('Invalid credentials');
      }
    };
  
    React.useEffect(()=>{ lucide.createIcons(); }, []);
  
    return (
      <main className="min-h-[70vh] container mx-auto px-4 flex items-center justify-center animate-fade-in">
        <div className="w-full max-w-md card-grad rounded-2xl p-8 animate-float">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
              <i data-lucide="lock" className="w-10 h-10 text-primary"></i>
            </div>
            <h2 className="text-2xl font-bold font-heading">Admin Access</h2>
            <p className="text-slate-400 mt-2">Enter your credentials to continue</p>
          </div>
          
          <div className="space-y-4">
            <input 
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-primary/20 focus:border-primary transition-colors font-body" 
              placeholder="Username" 
              value={u} 
              onChange={e=>setU(e.target.value)} 
            />
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-primary/20 focus:border-primary transition-colors font-body" 
              placeholder="Password" 
              value={p} 
              onChange={e=>setP(e.target.value)} 
              onKeyPress={e => e.key === 'Enter' && tryLogin()}
            />
            {err && <div className="text-red-400 text-sm animate-bounce-gentle">{err}</div>}
            <button 
              onClick={tryLogin} 
              className="w-full py-3 rounded-xl bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 font-body font-semibold"
            >
              Sign In
            </button>
            <p className="text-xs text-slate-400 text-center">Demo credentials: admin / pm-strong-pass</p>
          </div>
        </div>
      </main>
    );
  }
  