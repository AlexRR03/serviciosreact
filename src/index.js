import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ServicioCustomer from './components/ServicioCustomer';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches';
import DepartamentoEmpleados from './components/DepartamentoEmpleados';
import OficioEmpleados from './components/OficioEmpleados';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <OficioEmpleados />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
