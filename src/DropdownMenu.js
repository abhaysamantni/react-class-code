// Dropdown Menu: An example that allows the user to select an option from a 
// dropdown menu:



import { useState } from 'react';

function DropdownMenu() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    return (<div>
        <label>
            Select an option:
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
        </label>
        <p>You selected: {selectedOption}</p>
    </div>)
    
}
export default DropdownMenu;