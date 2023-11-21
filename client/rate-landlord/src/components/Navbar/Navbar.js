import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container container'>
            <Link to='/' className="navbar-logo">
                <GiRocketThruster className="navbar-icon" onClick={closeMobileMenu}/>
                Skye
            </Link>
            <div className='menu-icon'onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar