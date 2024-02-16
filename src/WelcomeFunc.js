// In this example, the Welcome component takes a name prop and displays a 
// greeting with the name.
// The App component uses the Welcome component multiple times, passing a 
// different name prop each time.
// Props can be of any type, such as numbers, strings, arrays, or objects. 
// You can also use React's PropTypes library to define the type of props that 
// a component should receive.



import React from 'react';

function Welcome(props) {
    return (
      <div>
          <h1>Hi, {props.name} Welcome to the software!</h1>;
          <h1>Hi, {props.name} your user id is {props.userid}</h1>;
      </div>
    ) 
}

function PresentUserID(props) {
  return <h1>Hi, {props.userid} is your userid</h1>;

}

function WelcomeFunc() {
    return (
      <div>
        <Welcome name = "Harry" userid = "har"/>
        <Welcome name = "Ron" userid = "ro"/>
        <Welcome name = "Hermione" userid = "her"/>
      </div>
    );
  }
  
  export default WelcomeFunc;
  