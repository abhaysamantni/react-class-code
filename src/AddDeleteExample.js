import { useState } from "react";
//The AddDeleteExample component renders a list of names.
//Each name is an object with id and name property.
//It also prompts the user to enter a name.
//The user can enter a new name by entering a new name and clicking the Add button.
//The user can delete an existing name by entering the name and clicking the Delete button.
//Now we will understand how this functionality is added to the component.
//The initialList is an array of objects.
//Each object contains an id and a name property.
//The state of the component comprises of two variables: input and list.
//The input stores the input from the user.
//The list stores the list of objects and is rendered using the <ul> element.


const AddDeleteExample = () => {
    const initialList = [
      {
        id: 1,
        name: "Robin",
      },
      {
        id: 2,
        name: "Dave",
      },
    ];
    const [input, setInput] = useState("");
    const [list, setList] = useState(initialList);
  
    function handleChange(e) {
      setInput(e.target.value);
    }
  //The handleAdd method splits the string str into a new array arr.
  //The array items are then assigned to a new object obj.
  //obj is added to the newList along with the old list items.
  //The newList is assigned to the list variable thus changing its state and re-rendering

    function handleAdd(str) {
      const length = list.length
      const lastId = list[length -1 ].id + 1;
      const obj = { id: lastId, name: str };
      console.log(obj);
      const newList = [...list, obj];
      setInput("");
      setList(newList);
    }
    //The handleRemove takes the name that user wants to remove from the list as an argument.
    //The filter method is used to filter all the items of the list except with the name argument.
    //The newList is then assigned to list thus changing its state and re-rendering. 
    
    function handleRemove(name) {
      const newList = list.filter((item) => item.name !== name);
      setInput("");
      setList(newList);
    }
    return (
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>&nbsp;
            </li>
          ))}
        </ul>
        <input value={input} onChange={handleChange}></input>
        <button onClick={() => handleAdd(input)}>Add</button>
        <button onClick={() => handleRemove(input)}>Delete</button>
      </div>
    );
  };
  
  export default AddDeleteExample;