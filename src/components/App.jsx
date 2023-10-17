import React, { Component } from 'react';
import TodoList from './TodoList';
import todos from '../data/todos';

export class App extends Component {
  state = {
    todos,
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Coстоярие компонента</h1>
        <TodoList todos={todos} />
      </div>
    );
  }
}
