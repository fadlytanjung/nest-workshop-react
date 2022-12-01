import React, { useState } from 'react';
import { Menu, Textarea } from '@mantine/core';
import { CaretDown, Pencil, FloppyDisk } from 'phosphor-react';
import { useTodoContext } from '../../context';
import classNames from 'classnames';

const Todo = ({ title, id, status, bgColor, textColor }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { STATUS_TODO, onChange } = useTodoContext();

  const handleChange = (e) => {
    onChange(id, 'title', e.target.value);
  };

  const handleSelect = (value) => {
    onChange(id, 'status', value);
  };

  return (
    <div className="flex flex-col bg-white w-full rounded-md p-3 shadow-sm mb-2">
      {open ? <Textarea onChange={handleChange} value={title} /> : <p> {title}</p>}
      <div className='flex justify-between mt-3 items-center'>
        <div className={classNames(
          'flex w-5 h-5 rounded-sm items-center justify-center text-white',
          open ? 'bg-information-50' : 'bg-warning-100'
          )}>
          {open ? <FloppyDisk className="cursor-pointer" onClick={() => setOpen(false)} size={14} /> :
          <Pencil className="cursor-pointer" onClick={() => setOpen(true)} size={14} />}
        </div>
        <Menu onChange={()=> setOpenMenu(!openMenu)} opened={openMenu} position="bottom-start" >
          <Menu.Target>
            <button className={classNames(`flex font-[600] px-2 py-1 rounded-sm justify-betwee items-center`, bgColor)}>
              <p className={classNames(`font-semibold`,textColor)}>{status}</p>
              <span className='font-bold ml-2'><CaretDown size={16} /></span>
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            {STATUS_TODO.map(el => (
              <Menu.Item key={el} onClick={()=>handleSelect(el)} value={el}>
                {el}
              </Menu.Item>
              )
            )}
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Todo;
