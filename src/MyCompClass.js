// A class-based component in React is a JavaScript class that extends the base 
// React.Component class.
// This type of component allows you to use more advanced features such as 
// lifecycle methods and state.
// Here is an example of a simple class-based component in React:



import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello, Welcome to EE462L!' };
    this.state = { message: 'Hello, Welcome to EE461L!'};
  }


  render() {
    return <h3>{this.state.message}</h3>;
  }
}

export default MyComponent;
