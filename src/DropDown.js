
// 05_ReactDropdownsAndRadioButtons : Creating DropDown component
// The <DropDownExample> component renders an <input> field, a <button> and a <DropDownComponent>.
// It consists of two variables: inputVal and itemList.
// The states of both variables are maintained using the useState hook.
// The inputVal variable stores the value entered by a user in the <input> field.
// When the <button> Add Item is clicked, it adds the inputVal to the dropdown.
// The task is achieved by clicking the button which calls the clickHandler() method.
// The clickHandler method creates a newList variable.
// This newList comprises the old list and the newly entered item.


import { useState } from "react";


const DropDownComponent = (props) => {
    const Records = props.list.map((item) => {
        return <option key={item.itemName}>{item.itemName}</option>;
        });
        return(<select>{Records}</select>);
}
// The setItemList() method is called to set the itemList to newList.
// This re-renders the itemList by rendering the <DropDownComponent> component.
// The <DropDownComponent> takes the itemList as props.
// The list is then rendered using the <select> and <option> tags.
// The list is traversed using the map() method and each item is dynamically rendered.

const DropDownExample = () => {
    const [inputVal, setInputVal] = useState("");
    const [itemList, setItemList] = useState([{ itemName: "--Select--" }]);
  
    const clickHandler = () => {
      setInputVal("");
      const newList = [...itemList, { itemName: inputVal }];
      setItemList(newList);
    };
    return (
        <div>
          <center>
            <h3>DropDown</h3>
            <input
              type="text"
              placeholder="Enter the item..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            ></input>
            <br></br>
            <button onClick={clickHandler}>Add Item</button>
            <DropDownComponent list = {itemList}/>
          </center>
        </div>
      );
    };
    

export default DropDownExample;          