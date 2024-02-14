import { useState } from "react";
import MyContext from "./MyContext";

function MyProvider(props) {
    const [data, setData] = useState('Hello World');
  
    return (
      <MyContext.Provider value={{ data, setData }}>
        {props.children}
      </MyContext.Provider>
    );
  }
  export default MyProvider;
  