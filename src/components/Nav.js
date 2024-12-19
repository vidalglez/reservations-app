import { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../assets/images/hamburger-menu-icon.svg'
const Nav = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const onEventMenuHandler = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    return (
        <nav >
            <img src={HamburgerMenu} alt="" className='hamburguer-menu-icon' onClick={onEventMenuHandler}/>
            <ul className={`nav-links ${isMenuVisible? '' : 'nav-links-hidden'}`} >
                <li><a href="#">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#">Menu</a></li>
                {/* <li><a href="#">Reservations</a></li> */}
                <li><Link to="/reservations" >Reservations</Link></li>
                <li className="order-online"><a href="#" >Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav