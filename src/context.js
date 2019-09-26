import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_PERSON":
      return {
        ...state,
        person: state.person.filter(item => item.id !== action.payload)
      };
    case "CREATE_PERSON":
      return {
        ...state,
        person: [action.payload, ...state.person]
      };
      break;
  }
};

export class Provider extends Component {
  state = {
    person: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ person: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
