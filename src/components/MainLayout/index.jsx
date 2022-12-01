import { Text, Title } from '@mantine/core';
import { Plus } from 'phosphor-react';
import React from 'react';
import { useTodoContext } from '../../context';

const MainLayout = ({ children }) => {
  const { addTodo } = useTodoContext();
  return(
    <div className="flex flex-col h-screen w-scree p-6 max-w-7xl my-0 mx-auto">
      <Title order={3}>Todo App</Title>
      <Text>This is todo app built with React</Text>
      <div className='bg-success w-8 h-8 flex items-center justify-center mt-3 rounded-md text-white cursor-pointer'>
        <Plus onClick={addTodo} size={20} />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
