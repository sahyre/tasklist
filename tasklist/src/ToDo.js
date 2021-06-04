import React from "react";
import { Col } from "reactstrap";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <Col>
      <li
        id={todo.id}
        onClick={handleClick}
        className={todo.complete ? "todo strike" : "todo"}
      >
        {" "}
        {todo.task}
      </li>
    </Col>
  );
};

export default ToDo;
