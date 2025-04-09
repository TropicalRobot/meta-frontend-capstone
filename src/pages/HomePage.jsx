import Hero from "../components/Hero";
import { Link } from "react-router";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <div>
        <Hero>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="display-title text-yellow">Little Lemon</h1>
              <h2 className="sub-title text-white">Chicago</h2>

              <p className="hero-text text-white">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Link className="button" to="/booking">
                Reserve a Table
              </Link>
            </div>
            <div className="hero-image-container">
              <img
                className="hero-image"
                src="./images/food-home.jpg"
                alt="Little Lemon Food"
                width="375px"
                height="auto"
                aria-label="Little Lemon Food"
              />
            </div>
          </div>
        </Hero>

        <section className="section cards">
          <div className="container">
            <header className="cards__header">
              <h2 className="cards__title display-title ">
                This week’s specials!
              </h2>
              <button className="button cards__button">Online Menu</button>
            </header>
            <div className="cards__container">
              <Card
                imageSrc="./images/greek-salad.jpg"
                heading="Greek Salad"
                text="The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons."
              />
              <Card
                imageSrc="./images/bruchetta.jpg"
                heading="Bruchetta"
                text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
              />
              <Card
                imageSrc="./images/lemon-dessert.jpg"
                heading="Lemon Dessert"
                text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
