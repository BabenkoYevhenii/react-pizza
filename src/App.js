import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Routes, Route} from "react-router-dom";
import React from "react";

import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzas } from './redux/action/pizzas'


function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
        });


    }, [])
    return (<div className="wrapper">
        <Header/>

        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>} exact/>
            </Routes>
        </div>
    </div>);


}

export default App;


