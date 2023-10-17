import React, { Component } from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.todoItems}>
          <p className={css.todoText}>{text}</p>
          <button type="button">Удалить</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
