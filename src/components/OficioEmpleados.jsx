import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class extends Component {
     selOficios=React.createRef();
    state={
        empleados: [],
        listaOficios : []
    }
    loadOficios = ()=>{
        let request = "/api/Empleados";
        axios.get(Global.urlEmpleados+request).then(response=>{
            let listaOficiosAux = []
            for (let empleado of response.data) {
                if (!listaOficiosAux.includes(empleado.oficio)) {
                    listaOficiosAux.push(empleado.oficio)    
                }
                
                
            }
            this.setState({
                listaOficios:listaOficiosAux
            })
            
            return response.data
        })

    }
    filtrarEmpleados = (e)=>{
        e.preventDefault();
        let nombreOficio = this.selOficios.current.value;
        let request = "/api/Empleados/EmpleadosOficio/"+nombreOficio;
        axios.get(Global.urlEmpleados+request).then(response=>{
            this.setState({
                empleados: response.data
            }) 
                
        })
        
    }
    componentDidMount=()=>{
        this.loadOficios()
    }

  render() {
    return (      
    <div>
        <h1>Oficios</h1>
        <form>
            <label>Oficios:</label>
            <select ref={this.selOficios}>
                {
                    this.state.listaOficios.map((oficio,index)=>{
                        return(
                            <option value={oficio} key={index}>{oficio}</option>
                        )
                    })
                }
            </select>
            <button onClick={this.filtrarEmpleados}>Filtrar</button>
                <ul>
                    {
                        this.state.empleados &&(  
                        this.state.empleados.map((empleado,index)=>{
                            return(<li key={index}>{empleado.apellido}</li>)
                        }))
                    }
                </ul>

        </form>
    </div>
    )
  }
}
