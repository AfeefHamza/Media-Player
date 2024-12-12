import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand  style={{color:"white"}}>
          <i className="fa-solid fa-video me-2"></i>
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header