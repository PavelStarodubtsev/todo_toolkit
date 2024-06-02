import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
        />
      ))}

    </ul>
  );
}
