import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function AddClient() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>НАИМЕНОВАНИЕ</Form.Label>
        <Form.Control type="text"  placeholder="" />
        <Form.Text className="text-muted">
          Текст
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>БИН</Form.Label>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>АДРЕС</Form.Label>
        <Form.Control type="text"  placeholder="" />
        <Form.Text className="text-muted">
          Текст
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ТЕЛЕФОН</Form.Label>
        <Form.Control type="text"  placeholder="" />
        <Form.Text className="text-muted">
          Текст
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
        <Col lg="6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ЛОГИН</Form.Label>
        <Form.Control type="text"  placeholder="" />
        <Form.Text className="text-muted">
          Текст
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ПАРОЛЬ</Form.Label>
        <Form.Control type="password" placeholder="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select>
          <option>Стандарт</option>
          <option>Премиум</option>
          <option>Люкс</option>
        </Form.Select>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddClient;
