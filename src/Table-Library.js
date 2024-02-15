// 
// In this example, we use the useTable hook from react-table to create a table 
// instance with the given columns and data. 
// We also use the prepareRow function to prepare each row for rendering. 
// We then render the table and its contents using the getTableProps, getTableBodyProps, headerGroups, rows, and prepareRow 
// functions provided by the table instance. 
// To use this component in your application, you would pass it a data prop with an array of objects representing your table data. 
// This would display the table in your application, with the data passed as props. 
// You could customize the component further by adding sorting, filtering, or pagination functionality

import { useTable } from "react-table";
import { useMemo } from 'react';


function Table({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Student Name', accessor: 'studName',},
      {
        Header: 'Student Age', accessor: 'studAge',
      },
      {
        Header: 'Student Gender', accessor: 'studGender',},
    ], [] );

    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;    