import React, { Component } from 'react';
import TodoList from './TodoList';
import todos from '../data/todos';

export class App extends Component {
  state = {
    todos,
  };
  onDelayTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
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
