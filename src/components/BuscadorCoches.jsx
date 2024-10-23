import React, { Component } from 'react'
import axios from 'axios'
import './style/BuscadorCoches.css'
export default class BuscadorCoches extends Component {
    //DECLARAR URL PARA LA PETICION DE LA API
    urlCoches ="https://apicochespaco.azurewebsites.net/webresources/coches"
    cajaMarca = React.createRef();
   
    state={
        listaCoches:[]
    }
    
     loadCoches=()=>{
         axios.get(this.urlCoches).then(response=>{
             console.log("leyendo coches")
             console.log(response.data)
             this.setState({
                 listaCoches:response.data
            })
         })
    }

    filtrarCoches=(e)=>{
        e.preventDefault()
        let marcaCoche = this.cajaMarca.current.value
        let marcas = []
        axios.get(this.urlCoches).then(response=>{
            for (let i = 0; i < response.data.length; i++) {
                if (marcaCoche.toLowerCase() == response.data[i].marca.toLowerCase()) {
                  marcas.push(response.data[i])
                  console.log(marcas)
                  this.setState({
                    listaCoches: marcas
                  })                      
                
                }
                
            } 
            
        })

    }
   componentDidMount =()=>{
        this.loadCoches()
    }
  
    render() {
    return (
      <div>
        <h1>Buscador de coches</h1>
        <form onSubmit={this.filtrarCoches}>
        <label>Marca:</label>
        <input type="text" ref={this.cajaMarca} />
        <button>Buscar</button>
        </form>
        <div id='contenedor'>
        <table  className='table table-dark'>
            <thead >
            <tr>
                <th>Coche</th>
                <th>Conductor</th>
                <th>Imagen</th>
            </tr>
            </thead>
            <tbody>
        {
            this.state.listaCoches &&(
            this.state.listaCoches.map((coche,index)=>{
                return(
                    <tr key={index}>
                        <td>{coche.modelo}</td>
                        <td>{coche.conductor}</td>
                        <td><img src={coche.imagen} alt="Imagen del coche " /></td>
                    </tr>
                
                
                )
            })
        )
            
        }
        </tbody>
        </table>
        </div>
      </div>
    )
  }
}
