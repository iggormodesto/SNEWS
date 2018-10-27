import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edite <code>src/App.js</code> e salve para recarregar.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leia Mais
          </a>
        </header>
        <section className="main container">
          <div className="row">
            <div className="col-ms">
              Coluna 1 - Teste
            </div>
            <div className="col-ms">
              Coluna 2
            </div>
            <div className="col-ms">
              Coluna 3
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
