import React, { Component } from "react";
import styled from "styled-components";

const CaixaDeMensagens = styled.section`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  border: 1px solid black;
`;

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 95%;
`;

const Mensagem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0 5%;
`;

const Texto = styled.p`
  margin: 1%;
`;

const ContainerEnvioDeMensagens = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  height: 5%;
`;

const InputUsuario = styled.input`
  width: 30%;
`;

const InputMensagem = styled.input`
  width: 60%;
`;

const BotaoEnviar = styled.button`
  width: 10%;
`;

export default class Mensagens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      texto: "",
      listaDeMensagens: []
    };
  }

  onChangeUsuario = event => {
    this.setState({
      usuario: event.target.value
    });
  };

  onChangeTexto = event => {
    this.setState({
      texto: event.target.value
    });
  };

  onClickBotaoEnviar = () => {
    const mensagem = {
      usuario: this.state.usuario,
      texto: this.state.texto
    };

    const novoArrayMensagens = [...this.state.listaDeMensagens, mensagem];

    if (this.state.usuario !== "" && this.state.texto !== "") {
      this.setState({
        usuario: "",
        texto: "",
        listaDeMensagens: novoArrayMensagens
      });
    }
  }

  onKeyDownEnter = event => {
      if(event.keyCode === 13) {
          this.onClickBotaoEnviar();
      }
  }

  render() {
    const listaDeMensagens = this.state.listaDeMensagens.map(mensagem => {
      return (
        <Mensagem>
          <h3>{mensagem.usuario}:</h3>
          <Texto>{mensagem.texto}</Texto>
        </Mensagem>
      );
    });

    return (
      <CaixaDeMensagens>
        <ContainerMensagens>{listaDeMensagens}</ContainerMensagens>
        <ContainerEnvioDeMensagens>
          <InputUsuario
            value={this.state.usuario}
            placeholder={"Usuário"}
            onChange={this.onChangeUsuario}
          />
          <InputMensagem
            value={this.state.texto}
            placeholder={"Mensagem"}
            onChange={this.onChangeTexto}
            onKeyDown={this.onKeyDownEnter}
          />
          <BotaoEnviar onClick={this.onClickBotaoEnviar}>Enviar</BotaoEnviar>
        </ContainerEnvioDeMensagens>
      </CaixaDeMensagens>
    );
  }
}
