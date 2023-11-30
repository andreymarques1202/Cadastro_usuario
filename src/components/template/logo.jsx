import "./logo.css";
import React from "react";
import logo from "../../assets/img/marca.png";

const Logo = props => {
    return(
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="Logo" />
        </a>
    </aside>
    )
}

export default Logo;
    
    
