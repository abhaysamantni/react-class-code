function App1() {

    const products = [
        { id: 'P01', name: 'Water Bottle', quantity: 10},
        { id: 'P02', name: 'Lunch Box' , quantity: 15 },
        { id: 'P03', name: 'School Bag' , quantity: 12 }
    ];

    return (
        <ul>
            {products.map((item) => (
                <li key={item.id}>
                    {item.name} : { item.quantity > 10 ? "Sufficient" : "Insufficient" }
                </li>
            ))}
        </ul>
    );
}



export default App1; 