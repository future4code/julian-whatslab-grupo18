import React, { Component } from 'react';

export default class Mensagens extends Component {
    constructor(props) {
        super(props);

        this.state({
            mensagens: []
        });
    }

    render() {
        const listaDeMensagens = this.state.mensagens.map(mensagem => {
            return <li key = { mensagem.usuario } >
                <
                h3 > { mensagem.usuario } < /h3> <
                p > { mensagem.texto } < /p> <
                /li>
        });

        return ( <
            div className = { "container" } >
            <
            div > { listaDeMensagens } <
            /div> <
            /div>
        );
    }
}