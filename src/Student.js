import React from "react";

export class Student extends React.Component {
  state = {
    name: "",
    inClass: false,
    classCount: 3,
  };

  handleStudentName = (event) => {
    const id = document.getElementById("nameInput");

    this.setState({
      name: id.value,
    });
  };

  handleClass = (event) => {
    this.setState({
      inClass: !this.state.inClass,
    });

    this.setState({
      classCount: this.state.classCount++,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input id="nameInput" name="studentName" placeholder="name" />
          <button type="button" onClick={this.handleStudentName}>
            Save Student Name
          </button>
        </form>

        <p>Student's name is {this.state.name}</p>
        <p>Student's classes {this.state.classCount}</p>

        <button type="button" onClick={this.handleClass}>
          {this.state.inClass ? "Leave the Class" : "Join the Class"}
        </button>
      </div>
    );
  }
}
