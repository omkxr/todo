import { useState } from "react";
import "./App.css";
import Todo from "./Todo/Todo";
import NewTodo from "./Todo/NewTodo/NewTodo";

const Dummy_todoItem = [
  {
    date: new Date(2020, 5, 4),
    todolist: "Breakfast",
    todotime: "8:00 ",
  },
  {
    date: new Date(2019, 5, 4),
    todolist: "Lunch",
    todotime: "13:00",
  },
  {
    date: new Date(2021, 5, 4),
    todolist: "Snacks",
    todotime: "17:00",
  },
  {
    date: new Date(2022, 5, 4),
    todolist: "Dinner",
    todotime: "20:00",
  },
];

const App = () => {
  const [todoItem, setTodoList] = useState(Dummy_todoItem);

  const addListner = (todoData) => {
    setTodoList([...todoItem, todoData]);
  }

  return (
    <div>
      <NewTodo  onSave={addListner}/>
      <Todo todo={todoItem} />
    </div>
  )
};

export default App;
