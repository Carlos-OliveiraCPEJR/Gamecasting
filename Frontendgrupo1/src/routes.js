import React from "react";
import { BrowserRouter, Route, Routes,/*redirect*/} from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuario";
import EscolhaPlano from "./Pages/Cadastro/EscolhaPlano";
import Plataforma from "./Pages/Plataforma";
import Barra from "./Pages/Barra";
import Favoritos from "./Pages/Plataforma/Favoritos";
import Lancamentos from "./Pages/Plataforma/Lancamentos";
import MaisJogados from "./Pages/Plataforma/Maisjogados";
import Recomendados from "./Pages/Plataforma/Recomendados";
import Footer from "./Pages/Footer"; 
//import {isAuthenticated} from "./services/auth";


/*const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {(props) =>
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (redirect ("/login") 
        )
    }
 />
);*/

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/cadastro" element ={<Cadastro />} />
                <Route path="/home" element ={<Home />}/>
                <Route path="/footer" element ={<Footer />}/>
                <Route path="/login" element ={<Login />}/>
                <Route path="/usuario" element ={<Usuario />}/>
                <Route path="/cadastro/escolhaplano" element ={<EscolhaPlano />}/>
                <Route path="/plataforma" element ={<Plataforma />}/>
                <Route path="/plataforma/maisjogados" element ={<MaisJogados />}/>
                <Route path="/plataforma/favoritos" element ={<Favoritos />}/>
                <Route path="/plataforma/recomendados" element ={<Recomendados />}/>
                <Route path="/plataforma/lancamentos" element ={<Lancamentos />}/>
                <Route path="/temp" element ={<Barra />}/>
            </Routes>
            </BrowserRouter>
        )
    }

export default Rotas;