import React, { Component } from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDelayTodo }) => {
  return (
    <ul className={css.todoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.todoItems}>
          <p className={css.todoText}>{text}</p>
          <button type="button" onClick={() => onDelayTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
