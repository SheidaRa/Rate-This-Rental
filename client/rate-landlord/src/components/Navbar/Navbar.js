
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { FaHouse } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar navbar-expand-lg '>
        <div className='container'>
          <div className='row'>
            <div className='navigation-links col-lg-4'>
              <div className={click ? 'collapse navbar-collapse' : 'navbar-collapse'}>
                <NavLink
                      exact
                      to='/about'
                      className='nav-link'
                      id='about-us'
                      activeClassName='active'
                      onClick={closeMobileMenu}
                    >
                      About us
                </NavLink>
                <NavLink
                      exact
                      to='/contact'
                      className='nav-link'
                      id='get-in-touch'
                      activeClassName='active'
                      onClick={closeMobileMenu}
                    >
                      Get in touch !
                </NavLink>
                <NavLink
                      exact
                      to='/map'
                      className='nav-link'
                      id='map'
                      activeClassName='active'
                      onClick={closeMobileMenu}
                    >
                      Map
                </NavLink>
              </div>
              <button
            className='navbar-toggler'
            type='button'
            onClick={handleClick}
          >
            {click ? <FaBars /> : <FaTimes />}
          </button>
            </div>
            <div className='col-lg-4 landlord-logo'>
              <Link to='/'>
              <FaHouse /> Rate your Landlord
              </Link>
            </div>
            <div className='col-lg-4 sign-in'>
              <Link to='/signin'>
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

