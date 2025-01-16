import { Link } from "react-router-dom"
import RestaurantFood from "../assets/images/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-section">
      <div className="hero">
        <article>
          <h2 className="display-title">Little Lemon</h2>
          <h3 className="display-sub-title">Chicago</h3>
          <p className="description-item">
            We are family owned Mediterranean restaurant, focused in traditional
            recipes served with a modern twist.
          </p>
          <div className="yellow-button">
            <Link to="/reservations">Reserve a Table</Link>
          </div>
        </article>
        <article>
          <img src={RestaurantFood} alt="Delicious food from Little Lemon" className="restaurant-food-image" />
        </article>
      </div>
    </section>
  )
}

export default Hero
