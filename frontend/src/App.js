import React, { Component } from 'react';
import snews from './imagens/logo.png';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="http://snews.tv/pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={snews} className="Logo-snew" alt="logo" />
          </a>
        </header>

        <section className="main container">
          <div className="row">
            <div className="col-sm">
              <h1>AGENDA</h1>
            </div>
            <div className="col-sm">
              <a href="#" className="button">Novo Contato</a>
            </div>
          </div>
        </section>

        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
