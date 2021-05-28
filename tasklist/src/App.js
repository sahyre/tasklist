import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [toDoList, setToDoList] = useState(data);
  //On click will toggle the state
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  //To clear completed items
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  //Input form changes to the state
  const addTask = (task_name) => {
    let added = [
      ...toDoList,
      { id: toDoList.length + 1, task: task_name, complete: false },
    ];
    setToDoList(added);
  };

  return (
    <Container>
      <Row>
        <Col sm={{ size: "auto", offset: 5 }}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col sm={{ size: "auto", offset: 5 }}>
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={{ size: "auto", offset: 5 }}>
          <ToDoForm addTask={addTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
