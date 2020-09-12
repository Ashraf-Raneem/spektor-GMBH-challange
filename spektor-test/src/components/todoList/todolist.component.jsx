import React from "react";
import "./todoList.styles.css";

import { Form, Button, FormGroup, Input } from "reactstrap";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      activity: "",
    };
  }
  onListAdd = (e) => {
    e.preventDefault();
    this.setState({ list: [...this.state.list, this.state.activity] });
    this.setState({ activity: "" });
    document.getElementById("myForm").reset();
  };

  onTextChange = (e) => {
    const value = e.target.value;
    this.setState({ activity: value });
  };
  removeItem = (e) => {
    const value = e.target.value;
    this.setState({
      list: this.state.list.filter((_, i) => i !== value),
    });
  };
  render() {
    return (
      <div className="todoListContainer">
        <h3>Todo app </h3>
        <Form id="myForm" onSubmit={this.onListAdd.bind(this)}>
          <FormGroup>
            <Input
              type="text"
              onChange={this.onTextChange.bind(this)}
              className="textField"
              placeholder="your activity"
            />
          </FormGroup>
          <Button typ="submit">ADD</Button>
        </Form>
        <div className="listContainer">
          {this.state.list.map((item, index) => (
            <ul className="list">
              <li key={index}>
                <span>{index + 1}</span>
                <span>{item}</span>{" "}
                <button
                  className="crossBtn"
                  value={index}
                  onClick={this.removeItem.bind(this)}
                >
                  &#10008;
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default TodoList;
