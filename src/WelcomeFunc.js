// In this example, the Welcome component takes a name prop and displays a greeting with the name.
// The App component uses the Welcome component multiple times, passing a different name prop each time.
// Props can be of any type, such as numbers, strings, arrays, or objects. 
// You can also use React's PropTypes library to define the type of props that a component should receive.
// Ref: Module 4 of Week 1: Props in React Components


import React from 'react';

function Welcome(props) {
    return <h1>Hi, {props.name} Have a nice day!</h1>;
}

function App1() {
    return (
      <div>
        <Welcome name = "Harry" />
        <Welcome name = "Ron" />
        <Welcome name = "Hermione" />
      </div>
    );
  }
  
  export default App1;
  