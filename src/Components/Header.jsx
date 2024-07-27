// // import React from 'react'
// // import {Link} from "react-router-dom";
// // function Header() {
// //   return <>
// //     <nav>Home </nav>
// //     <div>
// //     <Link to="/">Home</Link>
// //     <Link to="/about">About</Link>
// //     <Link to="/contact">Contact</Link>
// //     <Link to="/skills">Skills</Link>
// //     </div>
// //     </>
  
// // }

// // export default Header
// // import React, { useState } from 'react';
// // import { NavLink } from 'react-router-dom';
// // import './Header.css'
// // function Header() {
// //   const [isMenuOpen, SetIsMenuOpen]=useState(false);
// //   const toggleMenu=()=>{
// //     SetIsMenuOpen(!isMenuOpen)
// //   }

// //   return (
// //     <>
// //     <div className='header'>
// //       <nav>SHUBHAM</nav>
// //       <button className="menu-toggle" onClick={toggleMenu}>
// //         &#9776; {/* Unicode for hamburger icon */}
// //       </button>
// //       <div className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
// //         <NavLink  to="/">Home</NavLink>
// //         <NavLink to="/about">About</NavLink>
// //         <NavLink to="/Projects">Project</NavLink>
// //         <NavLink to="/contact">Contact</NavLink>
// //         <NavLink to="/skills">Skills</NavLink>
// //       </div>
     
// //       </div>
// //     </>
// //   );
// // }

// // export default Header;
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="header">
//       <nav>SHUBHAM</nav>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         &#9776; {/* Unicode for hamburger icon */}
//       </button>
//       <div className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/Projects">Projects</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/skills">Skills</NavLink>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <nav style={{color:'white'}}>SHUBHAM</nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Unicode for hamburger icon */}
      </button>
      <div className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/Project" onClick={()=>setIsMenuOpen(false)}>Project</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        <NavLink to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
      </div>
    </div>
  );
}

export default Header;
