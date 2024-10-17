import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Empleados extends Component {
    state ={
        empleados:[]
    }
    
    
    loadEmpleados = ()=>{
        let idDepartamento = this.props.idDepartamento
        let request ="/api/empleados/empleadosdepartamento/"+idDepartamento
        let url =Global.urlApiEmpleados2+request
        axios.get(url).then(response=>{
            this.setState({
                empleados:response.data
            })
        })
    }
    componentDidMount = ()=>{
        this.loadEmpleados()
    }
    componentDidUpdate =()=>{
        this.loadEmpleados()
    }
    render() {
    return (
      <div>
        <h1>Empledos</h1>
        <table>
            <thead>
                <tr>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                {this.state.empleados.map((empleado,index)=>{
                    return( 
                    <tr key={index}>
                        <td>{empleado.apellido}</td>
                        <td>{empleado.oficio}</td>
                        <td>{empleado.departamento}</td>
                    </tr>)
                })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
