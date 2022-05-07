const TodoDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  

  return (
    <div className="flex flex-col w-24 h-22 border-2 border-purple-500 shadow-ab p-2 m-4 rounded-xl bg-emerald-300 items-center justify-center">
      <div className="font-medium text-base">{month}</div>
      <div className="font-medium text-lg">{year}</div>
      <div className="font-medium text-xl">{day}</div>
    </div>
  );
};
 
export default TodoDate;
