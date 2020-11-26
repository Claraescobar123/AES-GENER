import React from 'react'
    import {
      Form,
      Button,
      Row,
      Col,
      Container,
    } from "react-bootstrap";
    import "./FormLogin.css";
    import { Link } from "react-router-dom";


    const FormLogin = () => {
    const eventClick = () => {
    console.log("Hola soy un botón");
  }
    return (
      <Container className="Container">
        <Row>
          <Col>
            <form className="Formulario">
              <h2>Bienvenidos</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <Link to="/NuevaSolicitud">
              <Button variant="primary" type="submit" onClick={eventClick} >Ingresar</Button>
                </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
    
    }



export default FormLogin;
