import React from "react";
import Main from "../template/main";

const Home = props => {
    return(
    <Main icon="home" title="Início" subtitle="Segundo projeto do capitulo de react">
            <div className="display-4">
                Bem vindo!
            </div>
            <hr />
            <p className="mb-0">Sistema para exemplicar a construção de um cadastro desenvolvido em react</p>
    </Main>
    )
}

export default Home;