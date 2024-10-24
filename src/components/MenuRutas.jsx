import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/2">Tabla de multiplicar</NavLink>
          </li>
          <li>
            <NavLink to="/404">Sin ruta</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
