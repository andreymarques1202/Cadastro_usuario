import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../components/home/home";
import User from "../components/user/UserCrud";

const Router = () => {
    return(
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<User/>}/>
        <Route exact path="*" element={<Home/>}/>
    </Routes>
    )
}

export default Router;