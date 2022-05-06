import React, { useState } from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const Todo = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <TodoFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.todo.map((todo) => (
        <TodoItem date={todo.date} list={todo.todolist} time={todo.todotime} />
      ))}
    </div>
  );
};

export default Todo;
