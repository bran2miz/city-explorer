import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import '../App.css'

class Header extends Component {
  render() {
    return (

      <>
        <Navbar bg="info" variant="dark">
          <Container className="justify-content-md-center">
            <Navbar.Brand className="header-city" href="https://mizutani-city-explorer.netlify.app/">
              City Explorer
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header;
