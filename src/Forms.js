// In this example, the Welcome component takes a name prop and displays a greeting with the name.
// The App component uses the Welcome component multiple times, passing a different name prop each time.
// Props can be of any type, such as numbers, strings, arrays, or objects. 
// You can also use React's PropTypes library to define the type of props that a component should receive.


import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return(
    <div>
      <center>
      <form>
        <label>
          Name: 
          <input type="text" value={inputValue} onChange={handleInputChange}/>
          
        </label>
        <p>Your name is: {inputValue}</p>
      </form>
      </center>
      
    </div>
  )
}

export default Form;

  