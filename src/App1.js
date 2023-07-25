import ProductsList from "./Keys";
import {
      Routes,
      Route,
      Link,
       } from "react-router-dom";
import About from './React-Router/About'
import Home from './React-Router/Home'
    
//function App1() {
//    ProductsList();
//
//    }
//export default App1

function App1() {
      return (
        <div>
         <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
           </ul>
         </nav>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/about" element={<About/>}>
            </Route>
        </Routes>
        </div>
    );
}  
export default App1;
    