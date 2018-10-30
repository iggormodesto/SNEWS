import React, { Component } from 'react';
import snews from './imagens/logo.png';
import editar from './imagens/edit.svg';
import excluir from './imagens/delete.svg';
import axios from 'axios';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  Form,
  FormGroup, 
  Input, 
} from 'reactstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    	items: [
        { 
          id: "01",
          name: "Leonardo Pereira", 
          gender: "Homem", 
          birthday: "18/06/1994", 
          email: "leonardopereira@daurep.com",
          phone: "95 3760-3464" 
        },
        { 
          id: "02",
          name: "Igor Modesto", 
          gender: "Homem", 
          birthday: "18/06/1994", 
          email: "iggormoreira@hotmail.com.br",
          phone: "61 98100-7179" 
        }
      ],
      modal: false,
      _embedded: []
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/contacts`)
      .then(res => {
        const _embedded = res.data;
        this.setState({_embedded});
      })
  }

  render() {
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
                  <Form>
                    <FormGroup>
                      <Input type="text" name="name" id="name" placeholder="Nome" />
                      <Input type="select" name="select" id="gender">
                        <option>Homem</option>
                        <option>Mulher</option>
                        <option>Não-binário</option>
                      </Input>
                      <Input type="date" name="datetime" id="birthday" placeholder="Aniversário" />
                      <Input type="email" name="email" id="email" placeholder="E-mail" />
                      <Input type="text" name="telefone" id="phone" placeholder="Telefone" />
                      <Button color="primary" onClick={this.toggle}>Salvar</Button>{' '}
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
          </div>

          <ul className="contatos">
            {this.state.items.map(item => (
              <li className="row">

                <div className="col">
                  <p>{item.id} - {item.gender}</p>
                  <h3>{item.name}</h3>
                  <p>{item.birthday}</p>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
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

          <ul>
            {console.log(this.state._embedded)}
            {this.state._embedded.contacts !== undefined &&
            this.state._embedded.contacts.map(contacts => (
              <li>{contacts.name}</li>
            ))}
          </ul>
        </section>

        <footer>
          <p>Desenvolvido por <a href="https://www.linkedin.com/in/igor-modesto/" target="_blank">Igor Modesto</a></p>
        </footer>
      </div>
    );
  }
}

export default App;