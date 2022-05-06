import {useState} from 'react';
import "./App.css";
import Todo from "./Todo/Todo";
import NewTodo from "./Todo/NewTodo/NewTodo";

const DUMMY_todoItem = [
  {
    date: new Date(2020, 5, 4),
    todolist: "Breakfast",
    todotime: "8:00 AM",
  },
  {
    date: new Date(2019, 5, 4),
    todolist: "Lunch",
    todotime: "1:00 PM",
  },
  {
    date: new Date(2021, 5, 4),
    todolist: "Snacks",
    todotime: "5:00 PM",
  },
  {
    date: new Date(2022, 5, 4),
    todolist: "Dinner",
    todotime: "8:00 PM",
  },
];

const App = () => {
  const [todoItem, setTodo] = useState(DUMMY_todoItem);

  const addListHandler = (newTodo) => {
    setTodo((prevTodo) => {
      return [newTodo, ...prevTodo];
    });
  }

  return (
    <div>
      <NewTodo onsavelist={addListHandler}/>
      <Todo todo={todoItem} />
    </div>
  )
};

export default App;
