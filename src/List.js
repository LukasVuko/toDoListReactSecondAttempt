import React from "react";

class List extends React.Component {
  handleToggleClick = (e, index) => {
    console.log(e.target.className);
    if (e.target.className === "close") {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.props.toggleListItem(index);
    }
  };

  render() {
    return (
      <ul id="myUL">
        {this.props.checklist.map((toDoItem, index) => {
          return (
            <li
              key={toDoItem.key}
              className={toDoItem.isComplete ? "checked" : null}
              onClick={e => this.handleToggleClick(e, index)}
              index={index}
              value="box"
            >
              {toDoItem.desc}
              <span
                value="exit"
                onClick={() => this.props.removePlayer(toDoItem.key)}
                className="close"
              >
                ✖
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;

// onClick LI - iterate through array and switch isComplete to opposite
// Were going to send Key
