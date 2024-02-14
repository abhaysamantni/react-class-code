import { useContext } from "react";
import MyContext from "./MyContext";
function ChildComponent() {
    const { data, setData } = useContext(MyContext);
  
    return (
      <div>
        <p>{data}</p>
        <button onClick={() => setData('New Value')}>Update Value</button>
      </div>
    );
  }

  export default ChildComponent;