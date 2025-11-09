import React from 'react';

export default function Recipe() {
  return (
    <section id="recipe" className="section">
      <h2>Recipe</h2>
      <div className="card">
        <h3>Ingredients:</h3>
        <ul>
          <li>1 cup jaggery (grated and lightly melted)</li>
          <li>1 cup thick coconut milk</li>
          <li>3 large eggs</li>
          <li>1/2 tsp ground cardamom</li>
          <li>1/4 tsp ground nutmeg</li>
          <li>2-3 pandan leaves (optional)</li>
          <li>Pinch of salt</li>
        </ul>
        <h3>Method:</h3>
        <ol>
          <li>Grate jaggery and gently melt in a little water to form smooth syrup.</li>
          <li>Beat eggs lightly, add coconut milk, cardamom, nutmeg, and salt. Mix until smooth.</li>
          <li>Slowly whisk jaggery syrup into the coconut-egg mixture to avoid curdling.</li>
          <li>Strain mixture to remove lumps; add pandan leaves if using.</li>
          <li>Pour into a lightly greased baking dish. Cover with foil and cook in a water bath at 160°C (320°F) for 45–60 mins until set.</li>
          <li>Cool to room temperature, then chill 3–4 hours before serving.</li>
          <li>Optional garnish: coconut cream, toasted cashews, or a light dust of cardamom.</li>
        </ol>
        <p><strong>Pro tips:</strong> Use jaggery instead of sugar for authentic flavor. Steam for smoother texture. Avoid vigorous whisking once jaggery is added to prevent bubbles.</p>
      </div>
    </section>
  );
}
