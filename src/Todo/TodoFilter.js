import React from 'react';

const TodoFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className=' pr-4'>
      <div className='flex items-center m-12'>
        <label className='text-white pr-4 font-bold mb-1'>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler} className='pt-1 pb-1 pr-12 font-bold rounded-md'>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;