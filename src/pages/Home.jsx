import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faUserPlus, faUserPen } from "@fortawesome/free-solid-svg-icons";

library.add( faList, faUserPlus, faUserPen);

const Home = () => {
  return (
    <Container className="mt-5 text-center">
      <h1 className="mb-4">Bienvenido a la Gestión de Empleados</h1>
      <p className="lead">
        Administra y organiza tu equipo de trabajo de manera eficiente con nuestra plataforma.
      </p>

      {/* Sección de características */}
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title><FontAwesomeIcon className="icon-menu" icon="list" /> Listado de Empleados</Card.Title>
              <Card.Text>Visualiza y gestiona todos los empleados registrados en el sistema.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title><FontAwesomeIcon className="icon-menu" icon="user-plus" /> Agregar Empleados</Card.Title>
              <Card.Text>Registra nuevos empleados con facilidad.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title><FontAwesomeIcon className="icon-menu" icon="fa-solid fa-user-pen" /> Editar y Eliminar</Card.Title>
              <Card.Text>Edita y/o elimina empleado del listado rápidamente.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;