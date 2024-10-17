import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from 'axios'
import Global from '../../Global'

export default class Departamentos extends Component {
    selectDepartamentos = React.createRef();
    
    state = {
        departamentos:[],
        idDepartamento:0
    }


    loadDepartamentos = ()=>{
        let request ="/api/departamentos"
        let url = Global.urlDepartamentos+request
        axios.get(url).then((response) => {
            this.setState({
                departamentos : response.data
            })
            
        })
    }

    componentDidMount =()=>{
        this.loadDepartamentos();
    }

    buscarEmpleado =(e) => {
        e.preventDefault()
        let idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento:idDepartamento
        })
    }

    render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
            <select ref={this.selectDepartamentos}>
                {
                    this.state.departamentos.map((departamento,index)=>{
                        return(
                            <option value={departamento.Numero} key={index}>{departamento.Nombre}</option>
                        )
                    })
                }

            </select>
            <button onClick={this.buscarEmpleado}>
                Buscar Empleados
            </button>
        </form>
        {
            this.state.idDepartamento !=0 &&(
                <Empleados idDepartamento={this.state.idDepartamento}/>
            )
        }
      </div>
    )
  }
}
