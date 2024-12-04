import RestaurantFood from "../assets/images/restauranfood.jpg"
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <article>
          <h2 className="display-title">Little Lemon</h2>
          <h3 className="display-sub-title">Chicago</h3>
          <p className="description-item">
            We are family owned Mediterranean restaurant, focused in traditional
            recipes served with a modern twist.
          </p>
          <button className="yellow-button">Reserve a Table</button>
        </article>
        <article>
          <img src={RestaurantFood} alt="" className="restaurant-food" />
        </article>
      </div>
    </section>
  )
}

export default Hero
