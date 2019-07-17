import React from "react";

class Header extends React.Component {
  state = {
    value: ""
  };

  handleUpdateValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== "") {
      this.props.addPlayer(this.state.value);
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="myInput"
            placeholder="Add a list item..."
            value={this.state.value}
            onChange={this.handleUpdateValue}
          />
          <input type="submit" className="addBtn" value="Add" />
        </form>
      </div>
    );
  }
}

export default Header;
