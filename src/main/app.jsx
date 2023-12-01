import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Routes from "./routes";
import Footer from "../components/template/footer";
import { BrowserRouter } from "react-router-dom";

const App = props => {
    return(
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>
    )
}

export default App;