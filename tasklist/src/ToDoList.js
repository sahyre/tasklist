import React from "react";
import Todo from "./ToDo";
import { Button, Col, Container, Row } from "reactstrap";

const ToDoList = ({ toDoList, handleFilter, handleToggle }) => {
  return (
    <Container>
      <Row>
        <ul>
          {toDoList.map((todo) => (
            <Todo todo={todo} key={todo.id} handleToggle={handleToggle} />
          ))}
        </ul>
      </Row>
      <Row>
        <Col>
          <Button
            className="button-margin"
            color="primary"
            onClick={handleFilter}
          >
            Clear Completed
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoList;
