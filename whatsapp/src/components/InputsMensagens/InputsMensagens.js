import React, { Component } from 'react';
import './InputsMensagens.css';


export default class InputsMensagens extends Component {
    constructor(props) {
        super(props);

        this.state = {
           valorUsuario: "" ,
           valorMensagem: ""
        }
    }

    onChangeUsuario = (event) => {
        this.setState({
            valorUsuario: event.target.value
        });
    }

    onChangeMensagem = (event) => {
        this.setState({
            valorMensagem: event.target.value
        });
    }

    render() {
        return (
            <div className={"container"}>
                <div>
                    <input
                        className={"input-usuario"}
                        placeholder={"Usuário"}
                        value={this.state.valorUsuario}
                        onChange={this.onChangeUsuario}
                    />
                    <input
                        className={"input-mensagem"}
                        placeholder={"Mensagem"}
                        value={this.state.valorMensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <button onClick={this.props.enviar}>Enviar</button>
                </div>
            </div>
        )
    }
}