import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <>
        <Navbar bg="info" variant="dark">
          <Container className="justify-content-md-center">
            <Navbar.Brand className="footer-city" href="https://mizutani-city-explorer.netlify.app/">
              Back to the Top
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Footer;