import { useState } from 'react';

// 02_ReactSetsAndObjects deck Object Example
// The ObjectExample component creates an object customer with empty name and phone values.
// When the user enters the Name and Contact input elements, the object’s values are dynamically set.
// This is achieved by calling the handleInputChange handler which creates a new object customer every time.
// The new object customer is created using the spread operator which expands the values of the old object. 
// The old values of object are replaced with the new values using e.target.value.
 
const ObjectExample = () => {
      const [customer, setCustomer] = useState({ name: "", phone: "" });
      const handleInputChange = (e, prop) => {
        setCustomer({
          ...customer,
          [ prop ] : e.target.value
        });
      };
    
      return (
        <>
          <label>
            Name: <input
                    value={customer.name} onChange={(e) => handleInputChange(e, "name")} />
          </label>
          <br></br>
          <label>
            Contact :
            <input value={customer.phone} onChange={(e) => handleInputChange(e, "phone")} />
          </label>
          <h1>
            {customer.name} : {customer.phone}
          </h1>
        </>
      ); };

export default ObjectExample;      