import { useState } from 'react';

const NewTodo = (props) => {

  const [list,setlist] = useState('');
  const [time,settime] = useState('');
  const [date,setdate] = useState('');

  const listChangeHandler = (e) => {
    setlist(e.target.value);
  }
  const timeChangeHandler = (e) => {
    settime(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setdate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const todoData = {
      list: list,
      time: time,
      date: date
    };
    console.log(todoData);
    setlist('');
    settime('');
    setdate('');
    props.onsavelist(todoData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-emerald-700 p-4 m-12 w-200 rounded-xl text-center shadow-bc flex-col">
        <div className="flex flex-col text-left">
          <div>
            <label className="font-bold mb-1 block">List</label>
            <input onChange={listChangeHandler} value={list} className="p-1 rounded-md border-solid border-2 border-stone-500 w-80 max-w-full" type="text" />
          </div>
          <div>
            <label className="font-bold mb-1 block">Time</label>
            <input onChange={timeChangeHandler} value={time} className="p-1 rounded-md border-solid border-2 border-stone-500 w-80 max-w-full" type="text" min="0.01" step="0.01" />
          </div>
          <div>
            <label className="font-bold mb-1 block">Date</label>
            <input onChange={dateChangeHandler} value={date} className="p-1 rounded-md border-solid border-2 border-stone-500 w-80 max-w-full" type="date" min="2020-12-01" />
          </div>
          <div className="text-right">
            <button className="bg-orange-200 p-4 m-1 w-200 rounded-xl text-center shadow-bc cursor-pointer pt-3 pr-3 border-2 border-stone-500 rounded-xl mr-4 hover:bg-cyan-400 active:bg-cyan-400 hover:border-cyan-200" type="submit">Add List</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewTodo;
