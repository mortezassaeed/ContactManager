import React, { Component } from "react";
import uuid from "uuid";
import { Consumer } from "../context";
import InputFormGroup from "../HtmlGenerator/InputFormGroup";
import axios from "axios";

export default class NewPerson extends Component {
  state = {
    id: 0,
    name: "",
    email: "",
    errors: { name: "", email: "" }
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email } = this.state;

    if (!name) {
      this.setState({ errors: { name: "Name Is Requierd" } });
      return;
    }
    if (!email) {
      this.setState({ errors: { email: "Email Is Requierd" } });
      return;
    }

    const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name,
      email
    });
    dispatch({
      type: "CREATE_PERSON",
      payload: res.data
    });

    // if (age <= 0) {
    //   this.setState({ errors: { age: "Last name Is Requierd" } });
    //   return;
    // }

    this.setState({
      id: "",
      name: "",
      email: ""
    });

    this.props.history.push("/");
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">new person</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputFormGroup
                    label="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <InputFormGroup
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <input
                    type="submit"
                    value="Add New Person"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card mb-3">
    //     <div className="card-header">new person</div>
    //     <div className="card-body">
    //       <form onSubmit={this.onSubmit}>
    //         <div className="from-group">
    //           <label htmlFor="name">name</label>
    //           <input
    //             type="text"
    //             className="form-control form-control-lg"
    //             value={name}
    //             name="name"
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <div className="from-group">
    //           <label htmlFor="lastName">lastName</label>
    //           <input
    //             type="text"
    //             className="form-control form-control-lg"
    //             value={lastName}
    //             name="lastName"
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <div className="from-group">
    //           <label htmlFor="age">age</label>
    //           <input
    //             type="text"
    //             className="form-control form-control-lg"
    //             value={age}
    //             name="age"
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <input
    //           type="submit"
    //           value="Add New Person"
    //           className="btn btn-light btn-block"
    //         />
    //       </form>
    //     </div>
    //   </div>
    //);
  }
}
