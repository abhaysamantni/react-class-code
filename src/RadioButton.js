
// 05_ReactDropdownsAndRadioButtons : Creating RadioButton component

// In this example, we have created two files.
// The first file is RadioButton.js which contains the <RadioButton> component.
// The second file is RadioButtonApp.js which contains the <App1> component.
// The <App1> component comprises of a radioItems array.
// It renders the <RadioButton> component passing the radioItems array as a prop.


import { useState } from "react";
function RadioButton(props) {
    const [radioValue, setRadioValue] = useState("");
    const [...options] = props.radioItems;
    return (
         <div>
           {options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name="dynamic-radio"
                value={option}
                checked={radioValue === option}
                onChange={(e) => setRadioValue(e.target.value)}
              />
            
            <label >{option}</label>
            </div>
          ))}
       </div>
    );
  }
 
  export default RadioButton;
