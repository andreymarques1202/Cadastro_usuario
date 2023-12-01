import React, {Component} from "react";
import Main from "../template/main";

const headerProps = {
    icon: "users",
    title: "usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
}


export default class User extends Component {
    render() {
        return(
            <Main {...headerProps}>
                cadastro de usuario
            </Main>
        )
    }
}