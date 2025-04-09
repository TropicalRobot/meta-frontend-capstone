import Hero from "../components/Hero";

export default function AboutPage() {
  return (
    <>
      <div>
        <Hero>
          <h1 className="display-title text-yellow">About</h1>
        </Hero>

        <section className="section">
          <div className="container">
            <p>
              Nestled in the heart of Chicago, Little Lemon is a cozy
              Mediterranean restaurant that blends rustic charm with vibrant
              flavors. Known for its warm, welcoming atmosphere and sun-drenched
              interiors, the restaurant offers a culinary escape inspired by the
              coasts of Greece, Italy, and southern France. The name itself
              hints at the freshness of its ingredients—citrusy, herbaceous, and
              bursting with Mediterranean zest.
            </p>

            <p>
              At Little Lemon, the menu is a celebration of wholesome, bold
              flavors. Signature dishes include chargrilled octopus drizzled
              with lemon and olive oil, creamy hummus served with wood-fired
              pita, and hearty moussaka layered with roasted vegetables.
              Vegetarians, vegans, and meat-lovers alike will find plenty to
              love, with thoughtfully curated dishes that emphasize seasonal
              produce, imported cheeses, and house-made sauces. Daily specials
              often reflect regional twists and locally sourced ingredients,
              keeping the experience fresh for regulars and newcomers alike.
            </p>

            <p>
              Beyond the food, Little Lemon prides itself on creating a
              community-oriented dining experience. Whether you’re stopping in
              for a leisurely weekend brunch, a romantic dinner, or a glass of
              wine with friends, the staff makes every guest feel like family.
              With soft Mediterranean music playing in the background and the
              scent of rosemary and lemon wafting through the air, Little Lemon
              is a little slice of the Mediterranean right in the heart of
              Chicago.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
