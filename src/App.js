import React from "react";
import Header from "./Header";
import List from "./List";

class App extends React.Component {
  state = {
    checklist: [
      {
        desc: "Hit the gym",
        isComplete: false,
        key: 1
      },
      {
        desc: "Buy eggs",
        isComplete: true,
        key: 2
      },
      {
        desc: "Read book",
        isComplete: false,
        key: 3
      },
      {
        desc: "Clean room",
        isComplete: false,
        key: 4
      }
    ]
  };

  prevKey = 4;

  handleAddPlayer = desc => {
    this.setState({
      checklist: [
        ...this.state.checklist,
        {
          desc,
          isComplete: false,
          key: (this.prevKey += 1)
        }
      ]
    });
  };

  handleRemovePlayer = delta => {
    this.setState({
      checklist: this.state.checklist.filter(id => id.key !== delta)
    });
  };

  toggleListItem = i => {
    const newchecklist = [...this.state.checklist];
    newchecklist[i].isComplete = !newchecklist[i].isComplete;
    this.setState({
      checklist: newchecklist
    });
  };

  render() {
    return (
      <div className="App">
        <Header addPlayer={this.handleAddPlayer} />
        <List
          checklist={this.state.checklist}
          removePlayer={this.handleRemovePlayer}
          toggleListItem={this.toggleListItem}
        />
      </div>
    );
  }
}

export default App;
