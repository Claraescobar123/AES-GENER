import React from 'react'
import portada from '../../img/portada.png'
import logo from '../../img/aes-gener.jpg'
import "./Login.css";
import FormLogin from "./FormLogin";



const Login = () => {
    return (
      <div className="login">
        <img className="imgPortada" src={portada} alt="imagenPortada" />
        <img className="logo" src={logo} alt="logoPortada" />
        <FormLogin />
      </div>
    );
}

export default Login
