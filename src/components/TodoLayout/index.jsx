import React from 'react';
import { useTodoContext } from '../../context';
import TodoItem from '../TodoItem';

const TodoLayout = () => {
  const { STATUS_TODO, filteredData } = useTodoContext();
  return (
    <div className='overflow-x-auto'>
      <section className="flex flex-nowrap gap-[10px] mt-4 w-[1158px]">
        {STATUS_TODO.map((item) => (<TodoItem key={item} title={item} data={filteredData(item)} />))}
      </section>
    </div>
  );
};

export default TodoLayout;
