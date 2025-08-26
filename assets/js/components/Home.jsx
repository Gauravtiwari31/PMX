function Home(){
  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <section className="rounded-3xl overflow-hidden hero-gradient text-white p-12 mb-16 relative animate-float-slow">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading animate-slide-in">This is the New Chapter of Football Analysis</h1>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">PMxFootball isn’t about replacing the stats you love. It’s about completing the picture.</p>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">For the fan who argues about a game after the final whistle, for the analyst looking for deeper insight, or for the casual viewer who wants to understand the “why” behind the “what” — the PM Index is for you.</p>
          <p className="content-paragraph text-xl opacity-90 mb-8 animate-fade-in">It’s football, understood. Welcome to a deeper way to see the game.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">Is the PM Index Better Than xG? In a Word, Yes.</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">Expected Goals (xG) is a great stat. It tells you about the quality of chances. But that’s only one chapter of the story.</p>
          <p className="content-paragraph text-lg mb-4">xG misses the defensive masterclasses, the midfield battles won, and the sheer control one team can exert over another.</p>
          <p className="content-paragraph text-lg mb-4">Let’s set the scene: A Champions League semi-final.</p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-lg">Team A has a higher xG (2.1). They took a few great shots but spent the entire game on the back foot, scrambling to win the ball back.</li>
            <li className="text-lg">Team B has a lower xG (1.4). But they controlled the midfield, passed with purpose, and defended with composure.</li>
          </ul>
          <p className="content-paragraph text-lg mb-2">xG says: Team A had the better game.</p>
          <p className="content-paragraph text-lg mb-4">The PM Index says: Team B delivered the stronger, more complete performance. And more often than not, our story matches the reality.</p>
          <p className="content-paragraph text-lg mb-4">Proof? Look at the last five Champions League finals. The team with the higher xG only won twice. The team with the higher PM Index won all five.</p>
          <p className="content-paragraph text-lg">And sometimes, the PM Index even vindicates the losers. Remember when Barcelona lost to Inter but dominated the play? The scoreline said one thing, but their sky-high PM score told the real story: they were the better team on the night, even in defeat.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">We Cover the Biggest Stages in Football</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">From the electric nights of the Champions League to the weekly grind of the Premier League, La Liga, Serie A, Bundesliga, and Ligue 1, we’ve got you covered.</p>
          <p className="content-paragraph text-lg">Whether it’s a cup final or a vital league clash, the PM Index cuts through the noise to show you which team truly performed.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">Forget What You Knew. Introducing the PM Index</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">The PM Index is our answer. It’s a single, powerful number that measures a team’s entire performance, not just its attack. Think of it as a match rating for the whole team.</p>
          <div className="content-paragraph text-lg mb-4">
            <div className="font-semibold mb-2">Our smart model analyses everything that matters on the pitch:</div>
            <ul className="list-disc pl-8 space-y-2">
              <li><span className="font-semibold">Attacking Threat</span>: But also the efficiency behind it.</li>
              <li><span className="font-semibold">Defensive Steel</span>: How solid and resilient was the back line?</li>
              <li><span className="font-semibold">Control</span>: Who truly dictated the tempo and controlled the game?</li>
              <li><span className="font-semibold">Creativity &amp; Possession</span>: How well was the ball actually used?</li>
            </ul>
          </div>
          <p className="content-paragraph text-lg">We blend all of this into one clear PM score. A higher number doesn’t just mean a team scored more; it means they played better, smarter, and more completely.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 font-heading text-center text-white">PMxFootball: See the Game They Played, Not Just the Score They Got</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">Welcome to PMxFootball, where we look past the scoreboard to reveal the true story of a football match.</p>
          <p className="content-paragraph text-lg mb-4">We all know the final score doesn’t always tell the whole tale. Your team might dominate possession, create chance after chance, and lose to a single counter-attack. Or, they might grind out a win on a tough night where nothing seemed to click.</p>
          <p className="content-paragraph text-lg">So, who actually played better?</p>
        </div>
      </section>
    </main>
  );
}


