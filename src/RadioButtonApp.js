import RadioButton from "./RadioButton";
function App1(){
    const radioItems = [
        'MongoDB',
        'ExpressJS',
        'ReactJS',
        'NodeJS',
    ];
    return(
        <RadioButton radioItems = { radioItems }/>
    )
}
export default App1;
