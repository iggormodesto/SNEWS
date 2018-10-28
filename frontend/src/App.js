import React, { Component } from 'react';
import snews from './imagens/logo.png';
import adicionar from './imagens/add.svg';
import editar from './imagens/edit.svg';
import excluir from './imagens/delete.svg';
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
              <a
                className="button adicionar"
                href="#"
                target="_blank"
              >
                <img src={adicionar} alt="Adicionar" /> Novo Contato
              </a>
            </div>
          </div>

          <ul className="contatos">
            <li className="row">
              <div className="col">
                <p>01 - Homem</p>
                <h3>Leonardo Pereira Martins</h3>
                <p>18/06/1994</p>
                <p>LeonardoPereiraMartins@dayrep.com</p>
              </div>
              <div className="col acoes">
                <a
                  className="adicionar"
                  href="#"
                  target="_blank"
                >
                  <img src={editar} alt="Editar" />Editar
                </a>

                <a
                  className="adicionar"
                  href="#"
                  target="_blank"
                >
                  <img src={excluir} alt="Editar" />Excluir
                </a>
              </div>
            </li>
          </ul>

        </section>

        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
