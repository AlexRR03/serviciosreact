import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tabla"> Tabla Multiplicar</a></li>
            <li><a href="/404">Sin ruta</a></li>
        </ul>
      </div>
    )
  }
}
