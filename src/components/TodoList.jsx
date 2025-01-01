import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // This is used to prevent Default Behavior(refresh the page on form submit)
    if (inputValue.trim()) {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const removeHandler = (indexToRemove) => {
    {
      setTodoList(todoList.filter((_, index) => index !== indexToRemove));
    }
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add Todos"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => removeHandler(index)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
