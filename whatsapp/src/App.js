import React from 'react';
import InputsMensagens from './components/InputsMensagens/InputsMensagens';
import './App.css';
import styled from 'styled-components';

const Conteudo = styled.div`
    display: flex;
    width: 50%;
    height: 100vh;
    border: 1px solid black;
`


function App() {
  return (
    <div className="container" >
      <Conteudo>
        <InputsMensagens />
      </Conteudo>

    </div>
  );
}


export default App;
