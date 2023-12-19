import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <div className="row">
            <div className="navigation-links col-md-4 col-3">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/about"
                    className={({ isActive }) =>
                      "nav-links " + (isActive ? "activated" : "")
                    }
                    id="about-us"
                    onClick={closeMobileMenu}
                  >
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/contact"
                    className={({ isActive }) =>
                      "nav-links " + (isActive ? "activated" : "")
                    }
                    id="get-in-touch"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/resources"
                    className={({ isActive }) =>
                      "nav-links " + (isActive ? "activated" : "")
                    }
                    id="resource"
                    onClick={closeMobileMenu}
                  >
                    Resources
                  </NavLink>
                </li>
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleClick}
              >
                {click ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div className="col-md-4 col-6 landlord-logo">
              <Link to="/">
                <img
                  src={"/photos/icons/logo.png"}
                  alt="Your Logo"
                  className="logo-img"
                />
                Rate Your Landlord
              </Link>
            </div>
            <div className="col-md-4 col-3 sign-in">
              <Link to="/signin">
                Sign in <CgProfile />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import './Navbar.css'

// import { NavLink } from "react-router-dom";
// import { GiRocketThruster } from "react-icons/gi";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";

// const Navbar = () => {
//     const [click, setClick] = useState(false)

//     const handleClick = () => setClick(!click)
//     const closeMobileMenu = () => setClick(false)

//   return (
//     <>
//     <nav className='navbar'>
//         <div className='navbar-container container'>
//             <Link to='/' className="navbar-logo">
//                 <GiRocketThruster className="navbar-icon" onClick={closeMobileMenu}/>
//                 Rate your Landlord
//             </Link>
//             <div className='menu-icon'onClick={handleClick}>
//                 {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     "nav-links" + (isActive ? " activated" : "")
//                   }
//                   onClick={closeMobileMenu}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </nav>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import './Navbar.css';

// import { NavLink } from "react-router-dom";
// import { GiRocketThruster } from "react-icons/gi";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";

// const Navbar = () => {
//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     return (
//         <>
//             <nav className='navbar navbar-expand-lg navbar-light bg-light'>
//                 <div className='container'>
//                     <Link to='/' className="navbar-logo">
//                         <GiRocketThruster className="navbar-icon" onClick={closeMobileMenu} />
//                         Rate your Landlord
//                     </Link>
//                     <button className='navbar-toggler' type='button' onClick={handleClick}>
//                         <FaBars />
//                     </button>
//                     <div className={click ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
//                         <ul className='navbar-nav ml-auto'>
//                             <li className='nav-item'>
//                                 <NavLink
//                                     to="/"
//                                     className="nav-link"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink
//                                     to="/about"
//                                     className="nav-link"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink
//                                     to="/contact"
//                                     className="nav-link"
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;
