import { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../assets/images/hamburger-menu-icon.svg'
const Nav = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const onEventMenuHandler = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <nav aria-label="Main Navigation">
            <button className="hamb-button" aria-label="On Click" onClick={onEventMenuHandler} aria-expanded={isMenuVisible} aria-controls="nav-links">
                <img src={HamburgerMenu} alt="Menu" className='hamburguer-menu-icon' />
            </button>
            <ul className={`nav-links ${isMenuVisible? '' : 'nav-links-hidden'}`} >
                <li><Link to="/" onClick={onEventMenuHandler}>Home</Link></li>
                <li><a href="#about-section" onClick={onEventMenuHandler}>About</a></li>
                <li><a href="#menu" onClick={onEventMenuHandler} >Menu</a></li>
                <li><Link to="/reservations" onClick={onEventMenuHandler} >Reservations</Link></li>
                <li className="order-online"><a href="#order-online" onClick={onEventMenuHandler} >Order Online</a></li>
                <li><a href="#login" onClick={onEventMenuHandler} >Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav