/**
 * Renders a list of days.
 * @returns {JSX.Element} The rendered list of days.
 */
function Lists(){
    const days = ['Sunday','Monday','Tuesday','Wednesday'];
    
    const listDays= days.map((day) => 
    <li> {day} </li>);
    return <ul> {listDays} </ul>;
    }
    
export default Lists