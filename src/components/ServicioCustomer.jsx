import React, { Component } from 'react'
import axios from 'axios'
export default class ServicioCustomer extends Component {
  //URL DE ACCESO Y EL REQUEST DEL SERVICIO
  urlCustomers ="https://northwind.netcore.io/customers.json"

  //VARIABLE STATE PARA ALMACENAR DATOS (CLIENTES)
  state = {
    customers:[]
  }
  //RECUPERAR LOS CLIENTES CON AXIOS
    laodCustomers = ()=>{
      axios.get(this.urlCustomers).then(response=>{
          console.log("Leyendo servicios")
          this.setState({
            customers: response.data.results
          })
          console.log(this.state.customers)
      })
    }
    componentDidMount=()=>{
      this.laodCustomers()
    }
  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>
        {
          this.state.customers.map((cliente,index)=>{
            return(<h3 style={{color:"blue"}} key={index}>{cliente.contactName}</h3>)      
           
          })
        }
        
      </div>
      
    )
  }
}
