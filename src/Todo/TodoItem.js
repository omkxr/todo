import TodoDate from './TodoDate';

const TodoItem = (props) => {
  return (
    <div className="flex justify-between items-center shadow-ab p-2 m-4 rounded-xl bg-sky-500/100">
      <TodoDate date={props.date}></TodoDate>
      <div className="flex items-end gap-4 flex-col-reverse justify-items-start">
        <h2 className="flex shadow-ab p-2 rounded-xl bg-purple-400 font-medium text-5xl text-white">{props.list}</h2>
      </div>
      <div className="font-medium text-3xl text-white bg-red-400 border border-white p-2 rounded-xl">{props.time}</div>
    </div>
  );
  }
export default TodoItem;
