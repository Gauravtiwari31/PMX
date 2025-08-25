import React from 'react'

export function Home(){
  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <section className="rounded-3xl overflow-hidden hero-gradient text-white p-12 mb-16 relative animate-float-slow">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading animate-slide-in">PMxFootball</h1>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 font-heading animate-fade-in">Redefining Football Performance</h2>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">At PMxFootball, we’re changing the way football performance is measured and understood.</p>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">Where traditional statistics often stop at goals, possession, or shots on target, our Performance Metric (PM) Index goes further. It tells you not just what happened, but how well it happened.</p>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">The PM Index weighs attacking efficiency, defensive stability, creativity, possession, and overall control.</p>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">We cover Europe’s top leagues and continental competitions including the UCL, UEL, and Super Cup.</p>
          <p className="content-paragraph text-xl opacity-90 mb-10 animate-fade-in">It’s football, understood through numbers — precise, fair, and revealing.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">Better than xG?</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">xG is useful but focuses mostly on attack. PM captures the whole balance — attack, defence, control, consistency.</p>
          <p className="content-paragraph text-lg mb-4">Example: Team A xG=2.1 but under pressure all game; Team B xG=1.4 but controls midfield and defends better. PM says Team B performed better overall.</p>
          <p className="content-paragraph text-lg mb-4">In recent UCL finals, winners didn’t always lead xG — but they consistently led PM.</p>
          <p className="content-paragraph text-lg">Barcelona vs Inter example: conceded four but topped PM — revealing overall superiority despite the scoreline.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">The Future of Football Analysis</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">PMxFootball enhances the stats you know.</p>
          <p className="content-paragraph text-lg mb-4">Football deserves a multi‑dimensional metric.</p>
          <p className="content-paragraph text-lg">With PM Index, you can finally see beyond the scoreboard.</p>
        </div>
      </section>
    </main>
  );
}
