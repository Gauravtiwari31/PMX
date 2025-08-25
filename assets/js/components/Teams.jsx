function Teams(){
  React.useEffect(()=>{ if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6 font-heading">Teams</h1>
      <div className="card-grad rounded-2xl p-8">
        <p className="text-slate-300">Public teams listing page. Content coming soon.</p>
      </div>
    </main>
  );
}


