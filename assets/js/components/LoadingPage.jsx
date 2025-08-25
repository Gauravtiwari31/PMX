function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="loading-spinner mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold mb-2 animate-pulse-slow">Loading PMxFootball</h2>
        <p className="text-slate-400 animate-bounce-gentle">Calculating performance metrics...</p>
      </div>
    </div>
  );
}


