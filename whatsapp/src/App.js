import React, { Component } from "react";
import Mensagens from "./components/Mensagens/Mensagens";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <Mensagens />
      </Container>
    );
  }
}
