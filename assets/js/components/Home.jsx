function Home(){
  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <section className="rounded-3xl overflow-hidden hero-gradient text-white p-12 mb-16 relative animate-float-slow">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading animate-slide-in">PMxFootball: See the Game They Played, Not Just the Score They Got.</h1>
          <p className="content-paragraph text-xl opacity-90 mb-4 animate-fade-in">Welcome to PMxFootball. We go beyond the score to show you the real story of a match.</p>
          <p className="content-paragraph text-xl opacity-90 mb-6 animate-fade-in">We all know the final score doesn't always tell the truth. Your team can dominate, create all the chances, and still lose. So, who actually played better?</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center text-white">The PM Index: Your Team's Performance, in a Single Number.</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">The PM Index is a simple number that rates a team's entire performance in a match.</p>
          <p className="content-paragraph text-lg mb-4">Think of it like a player rating, but for the whole team. A higher score means a team didn't just win—they played a smarter, more complete game.</p>
          <p className="content-paragraph text-lg">It’s that simple.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center text-white">How Does One Number Tell the Whole Story?</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">A single number is only powerful if it’s built on a complex understanding of the game. Our model analyses thousands of data points, evaluating the four pillars of a complete performance:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-lg"><span className="font-semibold">Attacking Threat &amp; Efficiency</span>: It’s not just about the number of shots, but the quality of the chances created and the efficiency of the attack. Did they create clear-cut opportunities or just take potshots?</li>
            <li className="text-lg"><span className="font-semibold">Defensive Steel &amp; Resilience</span>: This measures how a team wins the ball back. Was their defending a disciplined, structured masterclass or a desperate, last-ditch scramble? It rewards interceptions, clearances, and an organized shape that stifles the opponent.</li>
            <li className="text-lg"><span className="font-semibold">Midfield Control &amp; Tempo</span>: Who truly owned the heart of the game? This evaluates which team dictated the pace, won the key battles, and passed with purpose and control, not just possession for possession's sake.</li>
            <li className="text-lg"><span className="font-semibold">Creativity &amp; Progression</span>: How effectively did a team use the ball to break lines and advance into dangerous areas? It’s about meaningful possession that leads to something.</li>
          </ul>
          <p className="content-paragraph text-lg mt-4">We blend all of this into one clear, definitive PM score. It’s the full picture, not just one chapter.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center text-white">Cutting Through the Noise: Why the PM Index is Better Than Just xG.</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">Expected Goals (xG) is a great stat, but it only tells one part of the story: the quality of chances created. It completely misses the defensive masterclasses, the midfield battles won, and the sheer control one team can exert over another.</p>
          <p className="content-paragraph text-lg mb-4">Let’s be clear: a team can have a high xG by parking the bus and launching a few dangerous counter-attacks. But did they truly perform better over the full 90 minutes? Often, the answer is no.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 font-heading text-center text-white">The Proof is in the Performance.</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">Look at the last five Champions League finals. The team with the higher xG only won twice. The team with the higher PM Index won all five.</p>
          <p className="content-paragraph text-lg">And sometimes, the PM Index tells the story the scoreline hides. Remember the 2024 Champions League semi-final? Barcelona lost 3-4 to Inter Milan at the San Siro and went out. The scoreline said "defeat." The xG might have been close. But their better PM score from that match told the real story: despite the result, Barcelona delivered a win-worthy performance. The PM Index vindicated their performance, proving they were the better team on the night, even in defeat.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 font-heading text-center text-white">Welcome to the New Chapter of Football Analysis.</h2>
        <div className="card-grad rounded-2xl p-8 animate-float">
          <p className="content-paragraph text-lg mb-4">PMxFootball isn’t about replacing the stats you know; it’s about completing the picture.</p>
          <p className="content-paragraph text-lg mb-4">For the fan who argues about a game after the final whistle, for the analyst looking for deeper insight, or for the casual viewer who wants to understand the "why" behind the "what"—the PM Index is for you.</p>
          <p className="content-paragraph text-lg">It’s football, understood.</p>
        </div>
      </section>
    </main>
  );
}


