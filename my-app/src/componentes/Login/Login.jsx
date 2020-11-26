import React from 'react'
import portada from '../../img/portada.png'
import logo from '../../img/aes-gener.jpg'
import "./Login.css";



const Login = () => {
    return (
      <div className="login">
        <img className="imgPortada" src={portada} alt="imagenPortada" />
        <img className="logo" src={logo} alt="logoPortada" />
       
      </div>
    );
}

export default Login
