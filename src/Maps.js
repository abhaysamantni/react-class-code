// 03_ReactMaps Map Example
//The example shows a component ObjectExample which contains an object obj1.
//The object obj1 contains keys as integers and values as objects.
//Object.entries() method returns an array of object’s key-value pairs.
//We can traverse over the object’s key-value pairs using the Map method.
//It is a good practice to provide a key prop to the <span>. 

function MapExample(){
    const obj1 = {1: {firstName: "Jack", lastName: "Carter"},
                  2: {firstName: "John", lastName: "Smith"}};
  
    return (
    <div>
      {Object.entries(obj1).map(([key, value]) => <span key={key}> {key}: {value.firstName} {value.lastName} </span>) }
    </div>)
  }

export default MapExample;  
  