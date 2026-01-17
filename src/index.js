import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import MyComponent from './MyCompClass';
import MyComponent from './MyCompFunc';
import StateExample from './StateExample';
import WelcomeFunc from './WelcomeFunc';
import reportWebVitals from './reportWebVitals';
import Form from './Forms';
import Lists from './Lists';
import RadioButton from './RadioButton';
import DropdownMenu from './DropdownMenu';
import DropDown from "./DropDown"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <MyComponent title="Hi" message="Hello world"/>
      <WelcomeFunc />
      <StateExample initialCount={8} incrementValue={16}/>
      <StateExample initialCount={0} incrementValue={2}/>
      <StateExample initialCount={2} incrementValue={4}/>
      <DropdownMenu />
      <DropDown message="Enter projectid"/>
      <DropDown message="Enter hardwareid"/>
      <Form defaultMessage="Enter your name" message="Your name"/>
      <Form defaultMessage="Enter hardware you wish to check out" message="You chose"/>
    </div>
  </React.StrictMode>
);

 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
