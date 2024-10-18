import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
 
    state ={
        tabla:[]
    }

    generarTablaMultiplicar = ()=>{
        let aux=[]
        let num = parseInt(this.props.numero)
        for (let i = 1; i <= 10; i++) {
            let operacion = num*i
            aux.push(operacion)
            
        }
        this.setState({
            tabla:aux
        })

    }
 
    componentDidMount=()=>{
        this.generarTablaMultiplicar();
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
    render() {
    return (
      <div>
        <h1>Tablita  multiplicar Wey</h1>
        <h3 style={{color:"blue"}}>Numerito chilindron: {this.props.numero}</h3>
        <ul>{
            this.state.tabla.map((numero,index)=>{
                return(<li key={index}>{numero}</li>)
            })
            }</ul>
      </div>
    )
  }
}
