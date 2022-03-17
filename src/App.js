import {Header} from "./components";
import {Home,Cart} from "./pages";
import {Routes,Route} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


function App() {
  const [pizzas, setPizzas] = React.useState()
React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({data})=>setPizzas(data.pizzas))


},[]);
console.log(pizzas)
  return (
    <div className="wrapper">
      <Header/>

      <div className="content">
<Routes>
  <Route path="/" element={<Home items={pizzas} />}  />
    <Route path="/cart" element={<Cart/>} exact/>
</Routes>
      </div>
    </div>
  );
}

export default App;
