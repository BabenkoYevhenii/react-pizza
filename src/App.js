import {Header} from "./components";
import {Home,Cart} from "./pages";
import {Routes,Route} from "react-router-dom";
import React, {useState} from "react";

import  {connect} from "react-redux";
import axios from "axios";
import {setPizzas as setPizzasAction} from './redux/action/pizzas'
import store from "./redux/store";


class App extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data})=> {
            this.props.setPizzas(data.pizzas);
        });


    }

    render() {
        return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={this.props.items} />}  />
                    <Route path="/cart" element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
        );
    }

}
const mapStateToProps=(state)=>{
   return{
       items:state.pizzas.items
   }


}
const mapDispatchToProps = (dispatch)=>{
return{
    setPizzas:(items)=>dispatch(setPizzasAction(items)),
    dispatch,
}

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
