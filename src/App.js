import React from "react";
import TodoList from "./components/todoList";

import AddTodo from "./components/addTodo";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>

        <AddTodo addTodoFn={this.addTodo} />
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      console.log("Has todos", todos);
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  addTodo = async (todo) => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    console.log(localStorage.getItem("todos"));
  };
  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
      if (todo === _todo) {
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      } else {
        return _todo;
      }
    });
    await this.setState({ todos: newTodos });
    ///console.log(newTodos);
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
}
export default App;
