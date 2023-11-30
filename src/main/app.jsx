import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Main from "../components/template/main";
import Footer from "../components/template/footer";

const App = props => {
    return(
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início" subtitle="Segundo projeto do capitulo de react"/>
        <Footer/>
    </div>
    )
}

export default App;