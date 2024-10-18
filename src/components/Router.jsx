import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import NotFound from './NotFound'



export default class Router extends Component {
  render() {
    function TablaMultiplicarElemento(){
        //ESTA FUNCION SIRVE PARA CAPTURA LOS
        //PARAMETROS DE UNA RUTA

        let{ minumero }= useParams();

        //DEVOLVEMOS EL COMPONENT CORRESPONDIENTE
        //CON SUS PROPS
        return(<TablaMultiplicar  numero={minumero}/>)
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero'
            element = {<TablaMultiplicarElemento/>}
            />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
