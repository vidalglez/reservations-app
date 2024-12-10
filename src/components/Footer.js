const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img
            src={require(`../assets/images/little-lemon-logo.png`)}
            alt=""
            className="footer-little-lemon-image"
          />
        </div>
        <div className="footer-headers">
          <h3>Doormant Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div className="footer-headers">
          <h3>Contact</h3>
          <div>
            <p>2395 Maldove Way</p>
            <p>Chicago Illinois</p>
            <p>(629)-243-6827</p>
            <p>info@littlelemon.com</p>
          </div>
        </div>
        <div className="footer-headers">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="#">X</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tik Tok</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
