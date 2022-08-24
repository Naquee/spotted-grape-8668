import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import {Routes , Route} from "react-router-dom"
import { Cart } from './Components/pages/Cart';

import { LogIn } from './Components/pages/LogIn';
import { SuperShop } from './Components/pages/SuperShop';

function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path="/" element={<Home />}> </Route>
       <Route  path="/cart" element={<Cart />}> </Route>
       <Route  path="/login" element={<LogIn />}> </Route>
       <Route  path="/supershop" element={<SuperShop />}> </Route>
       <Route  path="/home/supershop" element={<SuperShop />}> </Route>
       <Route  path="/home/cart" element={<Cart />}> </Route>
       <Route  path="/home/supershop/cart" element={<Cart />}> </Route>
       <Route  path="/supershop/cart" element={<Cart />}> </Route>
       <Route  path="/:userId" element={<Cart />}> </Route>
       <Route path="me" element={`...`} />
     </Routes>
  
    </div>
  );
}

export default App;

