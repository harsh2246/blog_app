

// import React from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import "./Navbar.css"; // Import custom CSS file
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Navbar
//         bg="black"
//         expand="lg"
//         variant="dark"
//         fixed="top"
//         className="navbar"
//         style={{ justifyContent: "center" }}
//       >
//         <Container>
//           <Navbar.Brand href="#home">
//             <h1 style={{ padding: "0 20px", color: "white" }}>BlogIt</h1>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto  nav-right">
//               {/* Add the custom CSS class "nav-right" here */}

//               <Nav.Link
//                 onClick={() => navigate("/")}
//                 style={{ color: "white" }}
//               >
//                 Home
//               </Nav.Link>
//               <NavDropdown
//                 title="Categories"
//                 id="basic-nav-dropdown"
//                 style={{ color: "white" }}
//               >
//                 <NavDropdown.Item onClick={() => navigate("/food")}>
//                   Food
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/travel")}>
//                   Travel
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/Technology")}>
//                   Technology
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/Health")}>
//                   Health
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/nature")}>
//                   Nature
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/art")}>
//                   Art
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown
//                 title="User"
//                 id="user-nav-dropdown"
//                 style={{ color: "white" }}
//               >
//                 <NavDropdown.Item onClick={() => navigate("/login")}>
//                   Login
//                 </NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => navigate("/profile")}>
//                   Profile
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavBar;

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Navbar.css'; // Import custom CSS file

 

import { useNavigate } from 'react-router-dom';

//import About from './About';

import Cookies from 'js-cookie';

import React, { useState } from 'react';

// import images from "../logos/images.png";

import { FaHome, FaList, FaUtensils, FaPlane, FaMicrochip, FaHeartbeat, FaTree, FaPalette, FaHeart, FaPaintBrush, FaUser, FaSignOutAlt, } from 'react-icons/fa'; // Import icons

import './Navbar.css'; // Import custom CSS file

 

 

 

const NavBar = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(!!Cookies.get('id'));

 

  const logout = () => {

    Cookies.remove('id');

    setLoggedIn(false);

    navigate('/login');

  };

 

  return (

    <>

      <Navbar bg="black" expand="lg" variant="dark" fixed="top" className="navbar">

        <Navbar.Brand href="#home">

          {/* <div className='profile-image'>

            <img alt="Profile" src={images} />

          </div> */}
          <h1>Blogit</h1>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto nav-right">

            <Nav.Link onClick={() => navigate("/About")} >About</Nav.Link>

            <Nav.Link onClick={() => navigate("/")}>

              <FaHome className="icon" /> Home

            </Nav.Link>

            <NavDropdown title={<span><FaList className="icon" /> Categories</span>} id="basic-nav-dropdown">

           

  <NavDropdown.Item onClick={() => navigate("/food")}>

    <FaUtensils className="dropdown-icon"  /> Food

  </NavDropdown.Item>

 

  <NavDropdown.Item onClick={() => navigate("/travel")}>

    <FaPlane className="dropdown-icon" /> Travel

  </NavDropdown.Item>

 

  <NavDropdown.Item onClick={() => navigate("/Technology")}>

    <FaMicrochip className="dropdown-icon" /> Technology

  </NavDropdown.Item>

 

  <NavDropdown.Item onClick={() => navigate("/Health")}>

    <FaHeartbeat className="dropdown-icon" /> Health

  </NavDropdown.Item>

 

  <NavDropdown.Item onClick={() => navigate("/nature")}>

    <FaTree className="dropdown-icon" /> Nature

  </NavDropdown.Item>

 

  <NavDropdown.Item onClick={() => navigate("/art")}>

    <FaPalette className="dropdown-icon" /> Art

  </NavDropdown.Item>

</NavDropdown>

         

            <NavDropdown title={<span><FaUser className="icon"/> User</span>} id="user-nav-dropdown">

              {loggedIn ? (

                <>

                  <NavDropdown.Item onClick={() => navigate("/userblogpage")}><FaHeart className="icon" /> Add Blog</NavDropdown.Item>

                  <NavDropdown.Item onClick={() => navigate("/profile")}><FaPaintBrush className="icon" /> Profile</NavDropdown.Item>

                  <NavDropdown.Item onClick={() => logout()}><FaSignOutAlt className="icon" /> Logout</NavDropdown.Item>

                </>

              ) : (

                <NavDropdown.Item onClick={() => navigate("/login")}><FaUser className="icon" /> Login</NavDropdown.Item>

              )}

            </NavDropdown>

          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </>

  );

};

 

export default NavBar;
