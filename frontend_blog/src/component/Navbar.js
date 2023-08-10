import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css'; // Import custom CSS file
import { Link } from 'react-router-dom';
// import Image from '../component/logo.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
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
          
            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">

              <NavDropdown.Item onClick={()=>navigate("/food")}>
                Food
              </NavDropdown.Item>


              <NavDropdown.Item onClick={()=>navigate("/travel")}>
              Travel
              </NavDropdown.Item>


              <NavDropdown.Item onClick={()=>navigate("/Technology")}>
              Technology
              </NavDropdown.Item>


              <NavDropdown.Item  onClick={()=>navigate("/Health")}>
               Health
              </NavDropdown.Item>


              <NavDropdown.Item  onClick={()=>navigate("/nature")}>
              Nature
              </NavDropdown.Item>


              <NavDropdown.Item  onClick={()=>navigate("/art")}>
                Art
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="User" id="user-nav-dropdown">
              <NavDropdown.Item onClick={()=>navigate("/login")}>Login</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate("/register")}>Signup</NavDropdown.Item>
            </NavDropdown>
            </Nav>
</Navbar.Collapse>
</Navbar>
      {/* <div className='images'>
      <MDBCarousel showControls dealy={3000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel> */}
      
</>
  );
};

export default NavBar;
