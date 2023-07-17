
// 04_ReactTable deck: creating React tables from html table element.
//HTML tables can be created in React using the <table> tag.
//The table can be dynamically created using components.
//We can create table and row components.
//These components are then nested together to render the table.

import { useState } from "react";
//The <Row> component takes city and temperature as props from the <Table> component.
//The city and temperature values are destructured.
//The <Row> component returns a table row.
//This is rendered using the <tr> and <td> elements.


const Row = (props) => {
    const {city, temperature} = props;
    return(
        <tr>
            <td>{city}</td>
            <td>{temperature}</td>
        </tr>
    ) 
}
//The <Table> component takes the table data as props from the TableMain component.
//The data is stored in an array rows.
//The table is rendered using the <table> and <tbody> tags.
//The map() function is used with the array rows to map through its elements.
//Each row element’s city and temperature properties are passed as props to the <Row> component.

const Table = (props) => {
    const rows = props.data;
    return(
        <table>
            <tbody>
        {rows.map((row) => 
            <Row city={row.city} temperature={row.temperature} key={row.city}/>
            )}
            </tbody>
            </table>
    )
}
//A global array tableList stores the list of all the objects to be rendered in the table.
//The <TableMain> component sets the variable tableData to the value of tableList using the useState hook.
//It then renders the <Table> component and passes the tableData as a prop.

const tableList = [
    { city: 'New York', temperature: '52F'},
    { city: 'New Delhi', temperature: '50F'},
    { city: 'London', temperature: '30F'}
]
const TableMain = () => {
    const [ tableData, setTableData] = useState(tableList);
    return(
        <Table data={tableData} />
    )
}

export default TableMain;