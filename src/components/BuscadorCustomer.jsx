import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
export default class BuscadorCustomer extends Component {
    urlApi = Global.urlApiCustomers
    cajaId = React.createRef()
    state = {
        customers : null
    }
    buscarCustomers=(e)=>{
        e.preventDefault();
        //Recuperamos valor
        let idCustomer = this.cajaId.current.value;
        const request = "/customers/"+idCustomer+".json"
        axios.get(this.urlApi+request).then((response) => {
            console.log("leyendo servicio")
            this.setState({
                customers : response.data.customer
            })
           
        })
    }
  
    render() {
    return (
      <div>
        <h1>Buscador Customers</h1>
        <form onSubmit={this.buscarCustomers}>
        <label>Id:</label>
        <input type="text" ref={this.cajaId} />
        <button>Buscar customers</button>
        { this.state.customers && (
            <ul>
                <li>Cliente: {this.state.customers.contactName}</li>
                <li>Empresa: {this.state.customers.companyName}</li>
                <li>Puesto: {this.state.customers.contactTitle}</li>
                <li>Ciudad: {this.state.customers.city}</li>
            </ul>)
        }
        </form>
      </div>
    )
  }
}
