/**
 * Renders a list of days.
 * @returns {JSX.Element} The rendered list of days.
 */
function Lists(props){
    
    
    const listDays= props.userList.map((day) => 
    <li> {day} </li>);
    return <ul> {listDays} </ul>;
    }
    
export default Lists