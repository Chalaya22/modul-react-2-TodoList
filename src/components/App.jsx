import React, { Component } from 'react';
import TodoList from './TodoList';
import initialTodos from '../data/todos';

export class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: ' ',
    tag: ' ',
  };
  delayTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  handleImputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });

    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    // мы тут сделали деструктуризацию!!!
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const totalComplatedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <div>
        <h1>Coстоярие компонента</h1>
        <p>Общее количество: {totalTodoCount}</p>
        <p>Выполненое количество: {totalComplatedTodoCount}</p>

        <TodoList todos={todos} onDelayTodo={this.delayTodo} />

        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="inputValue"
              value={this.state.inputValue}
              onChange={this.handleImputChange}
            />
          </label>
          <label htmlFor="">
            Фамилия
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleImputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
