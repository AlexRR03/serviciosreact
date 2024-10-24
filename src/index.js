import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ServicioCustomer from './components/ServicioCustomer';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches';
import DepartamentoEmpleados from './components/DepartamentoEmpleados';
import OficioEmpleados from './components/OficioEmpleados';
import Departamentos from './components/maestrodetalle/Departamentos';
import TablaMultiplicar from './components/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/* <MenuRutas/> */}
        <Router/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
