import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul id="myUL">
        {this.props.checklist.map(li => {
          return (
            <li
              key={li.key}
              className={li.isComplete ? "checked" : null}
              onClick={() => this.toggleListItem(li.key)}
            >
              {li.desc}
              <span
                name="toggleLi"
                onClick={() => this.removePlayer(li.key)}
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
