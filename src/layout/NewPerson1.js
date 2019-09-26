import React, { Component } from "react";

export default class NewPerson extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputLastName = React.createRef();
    this.inputAge = React.createRef();
  }
  static defaulValue = {
    name: "abbas",
    lastName: "abbasi",
    age: 24
  };

  onSubmit = e => {
    e.preventDefault();
    const person = {
      name: this.inputName.current.value,
      lastName: this.inputLastName.current.value,
      age: this.inputAge.current.value
    };

    console.log(person);
  };

  render() {
    const { name, age, lastName } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">new person</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="from-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.inputName}
                name="name"
              />
            </div>
            <div className="from-group">
              <label htmlFor="lastName">lastName</label>
              <input
                type="text"
                className="form-control form-control-lg"
                defulatValue={lastName}
                ref={this.inputLastName}
                name="lastName"
              />
            </div>
            <div className="from-group">
              <label htmlFor="age">age</label>
              <input
                type="text"
                className="form-control form-control-lg"
                defulatValue={age}
                ref={this.inputAge}
                name="age"
              />
            </div>
            <input
              type="submit"
              value="Add New Person"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
