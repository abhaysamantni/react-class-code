// In React, a component's "state" is an object that stores data specific to that component. 
// This data can change over time and can be used to render dynamic content in the component. 
// The component's state is considered to be its "single source of truth".
// This is an example of a simple component with state. Ref: Module 05 of Week 1: Implementing state of components


import React, { useState } from 'react';

function App1() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Hi, You clicked this button {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
  );
}

export default App1;