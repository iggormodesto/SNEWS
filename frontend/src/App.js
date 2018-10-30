import React, { Component } from 'react';
import snews from './imagens/logo.png';
import editar from './imagens/edit.svg';
import excluir from './imagens/delete.svg';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from 'reactstrap';
import './App.css';

class App extends Component {
    Contatos = {
      _embedded: {
        contacts: []
      },
      page: {}
    }

  get() {
    fetch('http://localhost:8080/contacts')
    //.then(async (response) => {
    // return response.json();
    //})
    //.then (async (r) =>  {
    //  this.Contatos._embedded = r._embedded;
    //  this.Contatos.page = r.page;
    //})
    //.catch((error) => {
    //  console.error(error);
    //});
  }

  constructor(props) {
    super(props)
    this.state = {
    	items: [
        { 
          id: "01",
          nome: "Leonardo Pereira", 
          genero: "Homem", 
          nascimento: "18/06/1994", 
          email: "leonardopereira@daurep.com",
          telefone: "95 3760-3464" 
        },
        { 
          id: "02",
          nome: "Igor Modesto", 
          genero: "Homem", 
          nascimento: "18/06/1994", 
          email: "iggormoreira@hotmail.com.br",
          telefone: "61 98100-7179" 
        }
      ],
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    this.get ();
    //{console.log(this.Contatos)}
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="http://snews.tv/pt/"
            target="_blank"
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
              <Button className="button adicionar" onClick={this.toggle}>Novo Contato</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Novo Contato</ModalHeader>
                <ModalBody>
                  Formulário.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Salvar</Button>{' '}
                </ModalFooter>
              </Modal>
            </div>
          </div>

          <ul className="contatos">
            {this.state.items.map(item => (
              <li className="row">

                <div className="col">
                  <p>{item.id} - {item.genero}</p>
                  <h3>{item.nome}</h3>
                  <p>{item.nascimento}</p>
                  <p>{item.email}</p>
                  <p>{item.telefone}</p>
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
            ))}
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