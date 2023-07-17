import react, { useState } from 'react';

const App1 = () => {
    const [input, setInput] = useState('');
    const [state, setState] = useState(() => new Set());
        const changeValue = (e) => {
            setInput(e.target.value); 
        };
        const addItem = item => {
            setState(prev => new Set(prev).add(item));
        };
    
    return (
                <div>
                    <input value={input} onChange={changeValue}></input>
                    <button onClick={() => addItem(input)}>Add</button>
            
                    <div>
                        <h3> The items added in the Set are: <br></br></h3>
                        {Array.from(state)}
                    </div>
                </div>
            );
}
export default App1;