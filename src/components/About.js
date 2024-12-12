const About = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about">
        <div className="about-details">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
            hendrerit consequat. In dictum ligula in elit euismod malesuada.
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.
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
