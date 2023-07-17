function App1(){
    const days = ['Sunday','Monday','Tuesday','Wednesday'];
    
    const listDays= days.map((day) => 
    <li> {day} </li>);
    return <ul> {listDays} </ul>;
    }
    
export default App1