import { Component } from 'react';
// import axios from 'axios';
// import './App.css'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;