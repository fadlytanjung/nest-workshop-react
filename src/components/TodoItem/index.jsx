import React from 'react';
import { Title } from '@mantine/core';
import Todo from '../Todo';

const TodoItem = ({ title, data }) => {
  return (
    <div className="min-h-[256px] h-auto lg:w-1/4 w-[328px] bg-gray-25 rounded-md p-[8px]">
      <Title className="text-gray-50 mb-2" order={5}>{title}</Title>
      {data.map((todo) => <Todo key={todo.id} {...todo} />)}
    </div>
  );
};

export default TodoItem;
