import React from 'react';
import Table from './Table-Library';

function App1() {
    const data = [
        {
            studName: 'John', studAge: 30, studGender: 'Male', },
        {
            studName: 'Jane', studAge: 25, studGender: 'Female', },
        {
            studName: 'Bob', studAge: 45, studGender: 'Male', },
    ];
    return (
        <div className="App1">
        <Table data={data} />
        </div>
    );
}
    
export default App1;