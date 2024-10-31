import Logo from '../assets/images/Logo.svg'
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <div>
                <img src={Logo} alt="" className="little-lemon-logo"/>
                <Nav />
            </div>
        </header>
    )
}

export default Header