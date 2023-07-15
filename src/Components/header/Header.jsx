import "./Header.css"
import logo from "../images/logo.svg"
import { nav } from "../../data"

function Header(){
    return(
        <div className="header">
            <div className="container header-container">
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <nav className="navbar">
                <ul className="menu">
                    {nav.map((menu)=>(
                        <li className="menu-item">{menu.name}</li>
                    ))}
                </ul>
            </nav>
            <a href="#" >
                <button className="btn">Book now</button>
            </a>
            </div>
        </div>
    )
}

export default Header