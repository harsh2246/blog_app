import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './adminnav.css';

// import { Link } from 'react-router-dom';

// import Image from '../component/logo.png';

import { useNavigate } from 'react-router-dom';

 

const AdminNav = () => {

  const navigate = useNavigate();

  return (

      <Navbar bg="black" expand="lg" variant="dark" className="navbar">

      <Navbar.Brand href="#home">

          <h1 style={{padding:"0 20px"}}>BlogIt</h1>

        </Navbar.Brand>

        <Navbar.Brand href="#home">

        {/* <img src="{image}" width="40" height="40" /> */}

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

       

         

          <Nav className="ml-auto nav-right"> {/* Add the custom CSS class "nav-right" here */}

         

            <Nav.Link onClick={()=>navigate("/userlist")}>Userlist</Nav.Link>

            <Nav.Link onClick={()=>navigate("/bloglist")}>All Blogs</Nav.Link>

 

            <NavDropdown title="User" id="user-nav-dropdown">

              <NavDropdown.Item onClick={()=>navigate("/admin")}>Profile</NavDropdown.Item>

              <NavDropdown.Item onClick={()=>navigate("/login")}>Logout</NavDropdown.Item>

            </NavDropdown>

            </Nav>

</Navbar.Collapse>

</Navbar>

)

}

 

export default AdminNav;