import React from "react";
import Main from "../template/main";

const headerProps = {
    icone: "users",
    title: "usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!"
}

export default class UserCrud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                cadastro de usuario
            </Main>
        )
    }
}