import React, {useState} from "react";

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
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setItem(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${kindOfStand}`);
  };
  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>НАИМЕНОВАНИЕ</Form.Label>
        <Form.Control type="text"  placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>БИН</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>АДРЕС</Form.Label>
        <Form.Control type="text"  placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ТЕЛЕФОН</Form.Label>
        <Form.Control type="text"  placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Создать
      </Button>
    </Form>
        </Col>
        <Col lg="6">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ЛОГИН</Form.Label>
        <Form.Control type="text"  placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ПАРОЛЬ</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
      <form onSubmit={handleSubmit}>
      <Form.Group controlId="kindOfStand">
        <Form.Check
          value="Премиум"
          type="radio"
          aria-label="radio 1"
          label="Премиум"
          onChange={handleChange}
          checked={kindOfStand === "Премиум"}
        />
        <Form.Check
          value="Стандарт"
          type="radio"
          aria-label="radio 2"
          label="Стандарт"
          onChange={handleChange}
          checked={kindOfStand === "Стандарт"}
        />
        <Form.Check
          value="Эконом"
          type="radio"
          aria-label="radio 2"
          label="Эконом"
          onChange={handleChange}
          checked={kindOfStand === "Эконом"}
        />
      </Form.Group>
    </form>
      </Form.Group>
    </Form>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddClient;
