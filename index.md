---
layout: default
title: Home
description: "Comprehensive Watalappan resource — recipe, history, and gallery."
---

<section id="hero" class="hero-panel glass">
  <div class="hero-inner">
    <h1>Watalappan — Sri Lanka's Liquid Gold</h1>
    <p class="lead">A silky coconut jaggery custard, fragrant with cardamom and nutmeg — a generation-to-generation dessert served at festivals, weddings, and family tables.</p>

    <!-- Prefer local assets; put images into /assets/images/ as named below.
         If you prefer remote URLs, swap below to external links, but local is best. -->
    <picture class="hero-picture">
      <source srcset="{{ site.baseurl }}/assets/images/watalappan-hero-1200.jpg" media="(min-width: 900px)">
      <img src="{{ site.baseurl }}/assets/images/watalappan-hero-640.jpg" alt="Watalappan dessert in a bowl" class="hero-img" loading="lazy">
    </picture>

    <p class="hero-credit">Photo (free): Pixabay / Wikimedia — saved to <code>/assets/images/</code></p>
  </div>
</section>

<section id="history" class="section glass">
  <h2>History & Cultural Context</h2>

  <p>
    <strong>Origins:</strong> Watalappan (also spelled watalappam) arrived in Sri Lanka via Malay influence centuries ago. Its roots overlap with Malay steamed custards and South Asian jaggery traditions, merging locally available ingredients — coconut, palm jaggery (kithul or jaggery syrup), and spices — into a custard unique to Sri Lanka.
  </p>

  <p>
    <strong>Social significance:</strong> Watalappan is commonly prepared for holidays (especially Eid), weddings, and other large gatherings. In many households, the recipe and technique are passed down through families; small differences in jaggery type, steaming method, and spice balance create local and familial signatures.
  </p>

  <h3>Variations & Notes</h3>
  <ul>
    <li><strong>Jaggery type:</strong> Kithul jaggery (palm jaggery) produces a smoky, complex flavor; cane jaggery is sweeter and simpler.</li>
    <li><strong>Spices:</strong> Cardamom is universal; nutmeg, clove, or pandan leaf may be used regionally.</li>
    <li><strong>Texture:</strong> Steaming in a bain-marie yields the silkiest custard; direct baking gives a slightly firmer top crust (caramelized).</li>
  </ul>
</section>

<section id="recipe" class="section">
  <h2>Complete Recipe (detailed)</h2>

  <div class="recipe-grid">
    <article class="recipe-card glass">
      <h3>Ingredients (serves 6)</h3>
      <ul>
        <li>1 cup (240 ml) thick coconut milk (fresh if possible)</li>
        <li>3/4 cup (150–180 g) jaggery (kithul preferred) — grated</li>
        <li>3 large eggs (room temp)</li>
        <li>1 tsp ground cardamom</li>
        <li>1/4 tsp ground nutmeg</li>
        <li>1 tsp vanilla extract (optional)</li>
        <li>Pinch of salt</li>
        <li>Optional: pandan leaf or grated lime zest for aroma</li>
      </ul>
    </article>

    <article class="recipe-card glass">
      <h3>Method & pro tips</h3>
      <ol>
        <li><strong>Make jaggery syrup:</strong> Dissolve grated jaggery in 3–4 tbsp warm water; strain to remove impurities. Do not boil aggressively — simmer gently to preserve aroma.</li>
        <li><strong>Mix base:</strong> Lightly whisk eggs (avoid frothing), add coconut milk, vanilla, spices, and pinch of salt. Temper eggs with a little warm jaggery syrup if needed.</li>
        <li><strong>Combine & strain:</strong> Gradually whisk jaggery syrup into egg mixture. Strain the final mix through a fine sieve for smoothness.</li>
        <li><strong>Steam or bake:</strong> Pour into ramekins or a baking dish. Cover with foil. Steam in a covered pot for 30–45 minutes, or bake in a water bath at 150–160°C for 40–55 minutes until set but still slightly wobbly in center.</li>
        <li><strong>Cool & rest:</strong> Let cool to room temp, then refrigerate 3–4 hours. Texture firms up on chilling.</li>
        <li><strong>Serve:</strong> Garnish with roasted cashews, a drizzle of coconut cream, or a light dust of cardamom.</li>
      </ol>

      <p class="tips"><strong>Chef’s tips:</strong> Use fresh coconut milk for depth. Straining is non-negotiable for silken texture. For richer custard, substitute 1 egg with an additional 2 tbsp coconut cream.</p>
    </article>
  </div>
</section>

<section id="gallery" class="section glass">
  <h2>Gallery</h2>

  <div class="gallery-grid">
    <!-- Use local images in /assets/images/ if available; otherwise remote fallbacks below -->
    <figure class="gallery-item">
      <img src="{{ site.baseurl }}/assets/images/watalappan-hero-1200.jpg" alt="Watalappan whole dish">
      <figcaption>Traditional Watalappan — golden top, silky interior.</figcaption>
    </figure>

    <figure class="gallery-item">
      <img src="{{ site.baseurl }}/assets/images/watalappan-slice-1200.jpg" alt="Watalappan slice close-up">
      <figcaption>Close up — notice the silky custard texture and caramel tone.</figcaption>
    </figure>
  </div>
</section>

<!-- optional: short faq / notes -->
<section class="section glass">
  <h2>Notes, sourcing & licenses</h2>
  <p>Please include image source files in <code>/assets/images/</code> and confirm licenses. I recommend Pixabay or Wikimedia Commons images with explicit license. If you used external links, replace them with local files and commit them to the repo.</p>
</section>
