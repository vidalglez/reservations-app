// import Logo from '../assets/images/Logo.svg'
const Nav = () => {
    return (
        <nav>
            {/* <img src={Logo} alt="" className="little-lemon-logo"/> */}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav