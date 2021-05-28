import React, { useState } from "react";
import { Button, Input } from "reactstrap";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <div>
      <Input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <Button
        type="submit"
        color="primary"
        className="button-margin"
        value="submit"
        onClick={handleSubmit}
      >
        Add Task
      </Button>
    </div>
  );
};

export default ToDoForm;
