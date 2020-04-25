import React from "react";

class AddTodo extends React.Component {
  state = {
    todo: "",
  };
  render() {
    return (
      <div className="add-container">
        <form className="add-form" onSubmit={(e) => this.submitTodo(e)}>
          <input
            id="addTodoInput"
            onChange={(e) => this.saveInput(e)}
            type="text"
          ></input>
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
  saveInput = (e) => {
    this.setState({ todo: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();

    this.props.addTodoFn(this.state.todo);
    document.getElementById("addTodoInput").value = "";
  };
}

export default AddTodo;
