function Home(){
    return (
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <section className="rounded-3xl overflow-hidden hero-gradient text-white p-12 mb-16 relative animate-float-slow">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading animate-slide-in">PMxFootball</h1>
            <h2 className="text-3xl md:text-4xl font-medium mb-8 font-heading animate-fade-in">Redefining Football Performance</h2>
            <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">At PMxFootball, we’re changing the way football performance is measured and understood.</p>
            <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">Where traditional statistics often stop at goals, possession, or shots on target, our Performance Metric (PM) Index goes further. It tells you not just what happened, but how well it happened.</p>
            <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">The PM Index is built on a carefully designed mathematical model that weighs every key aspect of the game — attacking efficiency, defensive stability, creativity, possession, and overall control. By combining these elements, it produces a single, clear number that reflects the true quality of a team’s performance in any match.</p>
            <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">We cover all of Europe’s top football — the five major leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1) as well as the biggest continental competitions including the Champions League, Europa League, and Super Cup. From high-profile finals to league clashes, PM Index consistently reveals which team truly played better.</p>
            <p className="content-paragraph text-xl opacity-90 mb-10 animate-fade-in">This matters because PMxFootball is for those who want to go beyond the scoreline and see the game in its full depth. It’s football, understood through numbers — precise, fair, and revealing.</p>
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">Better than xG?</h2>
          <div className="card-grad rounded-2xl p-8 animate-float">
            <p className="content-paragraph text-lg mb-4">Expected Goals (xG) has become one of the most widely used stats...</p>
            <p className="content-paragraph text-lg mb-4">The PM Index was designed to bridge that gap...</p>
            <p className="content-paragraph text-lg mb-4">For example, imagine a Champions League knockout match:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li className="text-lg">Team A records an xG of 2.1...</li>
              <li className="text-lg">Team B ends with an xG of only 1.4...</li>
            </ul>
            <p className="content-paragraph text-lg mb-4">xG alone would suggest Team A...</p>
            <p className="content-paragraph text-lg mb-4">Here’s why that matters:</p>
            <p className="content-paragraph text-lg mb-4">Out of the last five Champions League finals...</p>
            <p className="content-paragraph text-lg">A famous example is Barcelona’s semi-final...</p>
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">The Future of Football Analysis</h2>
          <div className="card-grad rounded-2xl p-8 animate-float">
            <p className="content-paragraph text-lg mb-4">PMxFootball isn’t here to replace the stats you know — it’s here to make them better.</p>
            <p className="content-paragraph text-lg mb-4">We believe that football deserves a metric that’s as multi-dimensional as the game itself.</p>
            <p className="content-paragraph text-lg">With PM Index, fans, analysts, and even casual followers can finally see beyond the scoreboard and discover who really controlled the game.</p>
          </div>
        </section>
      </main>
    );
  }
  