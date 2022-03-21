import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {Provider} from "react-redux";

import store from "./redux/store";


import {BrowserRouter as Routes} from 'react-router-dom'





ReactDOM.render(
  <React.StrictMode>
    <Routes>
        <Provider store={store
        }>
            <App/>
        </Provider>

    </Routes>



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

