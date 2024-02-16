// In React, a component's "state" is an object that stores data specific to 
// that component. 
// This data can change over time and can be used to render dynamic content 
// in the component. 
// The component's state is considered to be its "single source of truth".
// This is an example of a simple component with state.
// Click button that shows how many times it has been clicked.


import React, { useState } from 'react';

function StateExample(props) {
    const [count, setCount] = useState(props.initialCount);
    return (
        <div>
            <p>Hi, You clicked this button {count} times</p>
            
            <button onClick={() => setCount(count + 2)}>
            Click me
        </button>
        </div>
  );
}

export default StateExample;