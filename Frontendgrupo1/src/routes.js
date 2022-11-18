import React from "react";
import { BrowserRouter, Route, Routes,Navigate,Outlet} from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuario";
import EscolhaPlano from "./Pages/Cadastro/EscolhaPlano";
import Plataforma from "./Pages/Plataforma";
import Barra from "./Pages/Barra";
import Lancamentos from "./Pages/Plataforma/Lancamentos";
import MaisJogados from "./Pages/Plataforma/Maisjogados";
import Recomendados from "./Pages/Plataforma/Recomendados";
import Footer from "./Pages/Footer"; 
import {isAuthenticated} from "./services/auth";

const PrivateRoute = ({redirectPath = '/login' }) => {
    if (!isAuthenticated()) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
  };
  

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/cadastro" element ={<Cadastro />} />
                <Route path="/home" element ={<Home />}/>
                <Route path="/footer" element ={<Footer />}/>
                <Route path="/login" element ={<Login />}/>
                <Route path="/cadastro/escolhaplano" element ={<EscolhaPlano />}/>
                <Route element = {<PrivateRoute/>}> 
                    <Route path="/usuario" element ={<Usuario />}/>
                    <Route path="/plataforma" element ={<Plataforma />}/>
                    <Route path="/plataforma/maisjogados" element ={<MaisJogados />}/>
                    <Route path="/plataforma/recomendados" element ={<Recomendados />}/>
                    <Route path="/plataforma/lancamentos" element ={<Lancamentos />}/>
                </Route>
                
                <Route path="/temp" element ={<Barra />}/>
            </Routes>
            </BrowserRouter>
        )
    }

export default Rotas;