import React from 'react'
    import {
      Form,
      Button,
      Row,
      Col,
      Container,
    } from "react-bootstrap";
    import "./FormLogin.css";
const FormLogin = () => {
    return (
      <Container className="Container">
        <Row>
          <Col>         
            <form className="Formulario">
              <h2>Bienvenidos</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <Button variant="primary" type="submit">
                INGRESAR
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
}

export default FormLogin;
