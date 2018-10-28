import React, { Component } from 'react';
import snews from './imagens/logo.png';
import adicionar from './imagens/add.svg';
import editar from './imagens/edit.svg';
import excluir from './imagens/delete.svg';
import './App.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class App extends Component {
    Contatos = {
      _embedded: {
        contacts: []
      },
      page: {}
    }

  get() {
    fetch('http://localhost:8080/contacts')
    .then(async (response) => {
     return response.json();
    })
    .then (async (r) =>  {
      this.Contatos._embedded = r._embedded;
      this.Contatos.page = r.page;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    this.get ();
    {console.log(this.Contatos)}
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
              <a className="button adicionar" href="#" target="_blank">
                Novo Contato
              </a>
            </div>
          </div>

          <ul className="contatos">
            <li className="row">

              <div className="col">
                <p>01 - Homem</p>
                <h3>Nome do Cara</h3>
                <p>18/06/1994</p>
                <p>LeonardoPereiraMartins@dayrep.com</p>
                <p>(95) 3760-3464</p>
              </div>

              <div className="col-3 acoes">
                <a className="adicionar" href="#">
                  <img src={editar} alt="Editar" />Editar
                </a>
                <a className="adicionar" href="#">
                  <img src={excluir} alt="Excluir" />Excluir
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
