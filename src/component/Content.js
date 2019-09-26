import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Content.css";
import { Consumer } from "../context";
import axios from "axios";

class Content extends Component {
  state = {
    showContantInfo: false
  };
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  clickArrowDown = e => {
    this.setState({ showContantInfo: !this.state.showContantInfo });
  };

  deleteItem = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({ type: "DELETE_PERSON", payload: id }));
  };

  render() {
    const { id, name, username, email } = this.props.person;
    const { showContantInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body md-3">
              <h1>
                {name}{" "}
                <i className="fa fa-sort-down" onClick={this.clickArrowDown} />
                <i
                  style={{ float: "right" }}
                  className="fa fa-amazon"
                  onClick={this.deleteItem.bind(this, id, dispatch)}
                />
              </h1>

              {showContantInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">id : {id}</li>
                  <li className="list-group-item">User Name : {username}</li>
                  <li className="list-group-item">Email : {email} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card card-body md-3">
    //     <h1>
    //       {name} <i className="fa fa-sort-down" onClick={this.clickArrowDown} />
    //       <i
    //         style={{ float: "right" }}
    //         className="fa fa-amazon"
    //         onClick={this.props.deleteItem}
    //       />
    //     </h1>

    //     {showContantInfo ? (
    //       <ul className="list-group">
    //         <li className="list-group-item">Last Name : {lastName}</li>
    //         <li className="list-group-item">Age : {age} </li>
    //       </ul>
    //     ) : null}
    //   </div>
    // );
  }
}

// Content.defualtType = {
//     name: PropTypes.string.isRequired,
//     lastName: PropTypes.string,
//     age: PropTypes.number
// }

export default Content;
