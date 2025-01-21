const About = () => {
  return (
    <section
      className="about-section"
      id="about-section"
      aria-labelledby="about-section"
    >
      <div className="about">
        <div className="about-details">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
          <p className="about-description">
            Little Lemon is owned by two Italian brothers, Mario and
            Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does all the
            marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the
            Mediterranean region.
          </p>
        </div>
        <div className="about-photo-container">
          <img
            src={require(`../assets/images/restaurant-chef.jpg`)}
            alt=""
            className="restaurant-chef-image"
          />
          <img
            src={require(`../assets/images/restaurant.jpg`)}
            alt=""
            className="restaurant-image"
          />
        </div>
      </div>
    </section>
  )
}

export default About
