// In this example, the Welcome component takes a name prop and displays a greeting with the name.
// The App component uses the Welcome component multiple times, passing a different name prop each time.
// Props can be of any type, such as numbers, strings, arrays, or objects. 
// You can also use React's PropTypes library to define the type of props that a component should receive.


import React from 'react';
import ReactDOM from 'react-dom/client';


function Button(props) {
  return <button onClick={props.onClick}>Click me</button>;
}

function handleClick() {
  alert("Button clicked!");
}


const App1 = () => {
  return(
    <div>
      <center>
      <Button onClick={handleClick} />
      </center>
      
    </div>
  )
};
//const App1() {
//    return (
//      ReactDOM.render(<Button onClick={handleClick} />, document.getElementById('root'));​
//    );
//  }
  
export default App1;
  