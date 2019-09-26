import React, { Component } from "react";
import Content from "./Content";
import { Consumer } from "../context";

export default class Contents extends Component {
  // state = {
  //   person: []
  // };

  constructor() {
    super();
  }

  deletIetemHandeler = id => {
    this.setState({ person: this.state.person.filter(m => m.id !== id) });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { person } = value;
          return (
            <div>
              {person.map(item => (
                <Content
                  key={item.id}
                  person={item}
                  deleteItem={this.deletIetemHandeler.bind(this, item.id)}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <Cunsumer>
    //     {value => {
    //       const { person } = value;
    //       <div>
    //         {person.map(item => (
    //           <Content
    //             key={item.id}
    //             person={item}
    //             deleteItem={this.deletIetemHandeler.bind(this, item.id)}
    //           />
    //         ))}
    //       </div>;
    //     }}
    //   </Cunsumer>
    // );

    // const { person } = this.state;
    // return (
    //   <div>

    //     {person.map(item => (
    //       <Content
    //         key={item.id}
    //         person={item}
    //         deleteItem={this.deletIetemHandeler.bind(this, item.id)}
    //       />
    //     ))}
    //   </div>
    // );
  }
}
