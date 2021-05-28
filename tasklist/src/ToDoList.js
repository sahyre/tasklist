import React from "react";
import Todo from "./ToDo";
import { Button } from "reactstrap";

const ToDoList = ({ toDoList, handleFilter, handleToggle }) => {
  return (
    <div>
      {toDoList.map((todo) => (
        <ul>
          <Todo
            todo={todo}
            key={todo.id + todo.task}
            handleToggle={handleToggle}
          />
        </ul>
      ))}
      <Button className="button-margin" color="primary" onClick={handleFilter}>
        Clear Completed
      </Button>
    </div>
  );
};

export default ToDoList;
