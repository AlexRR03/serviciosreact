import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
export default class DepartamentoEmpleados extends Component {
    slectDepartamentos = React.createRef();
    buscarEmpleados =(e)=>{
        e.preventDefault()
        let numDept = this.slectDepartamentos.current.value;
        let request ="/api/Empleados/EmpleadosDepartamento/"+numDept
        let url = Global.urlEmpleados+request
        axios.get(url).then(response=>{
            console.log(response.data)
            this.setState({empleados:response.data})
                
            
        })


    }
    state={
        empleados:[],
        departamentos:[]
    }

    loadDepartamentos = ()=>{
        let request ="/api/departamentos"
        let url = Global.urlDepartamentos+request
        axios.get(url).then(response=>{
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Departamento Empleados</h1>
                <form>
                    <label>Sleccionar Departamento</label>
                    <select ref={this.slectDepartamentos}>
                        {
                            this.state.departamentos &&(
                                this.state.departamentos.map((departamento,index)=>{
                                    return(<option value={departamento.Numero} key={index}>{departamento.Nombre}</option>)
                                })
                                
                            )
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>Buscar empleados</button>
                </form>
                <ul>
                        {this.state.empleados.map((empleado,index)=>{
                            return(<li key={index}>{empleado.apellido} - {empleado.oficio}</li>)
                        })}
                </ul>
            </div>
        )
    }
}
