import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";

function Pagos(props) {
    const [user,setUser]=useState({});
    const pago={
            id: props.match.params.id,
            monto: '',
            np: ''
        }
 
    useEffect(()=> {
        console.log(props.match.params.id);
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            id: props.match.params.id
        };
        console.log(newUser);
        axios.post('https://gymevolucion.herokuapp.com/user',newUser)
        //axios.post('http://localhost:3001/user',newUser)
        .then((response) => {
            console.log(response);
            setUser(response.data[0]);
            console.log(user);
        }).catch((e) => {
            console.log(e);
        });
        
    },[])


    function valueToMonto(Monto) {
        pago.monto=Monto;
        //setUser({
        //    Monto: Monto
        //})
        console.log(pago);
    }

    function valueToNp(np) {
        pago.np=np;
        //setUser({
        //    np: np
        //})
        console.log(pago);
    }

    function crea_pago(){
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'ultimo_pago',
            id: props.match.params.id,
            monto: pago.monto,
            np: pago.np

        };
        console.log("---------------------------------------------------------------------------------");
        console.log(newUser);
        console.log("---------------------------------------------------------------------------------");
        

        axios.post('https://gymevolucion.herokuapp.com/ins_pago',newUser)
        //axios.post('http://localhost:3001/ins_pago',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
           console.log(e);
        });
    }

    function modify_user(){
    }    
    
    //console.log(user);
    return (
        <>
            <br/><br/>
            <div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="nombre">Nombre </label>&nbsp;&nbsp;
                        <input
                            id="name_c"
                            name="name_c"
                            type="text"
                            class="form-control"
                            placeholder="Nombre del cliente"
                            autoComplete="off"
                            value={user.name_c}
                            disabled
                        />
                        &nbsp;&nbsp;<label htmlFor="Monto">Monto </label>&nbsp;&nbsp;
                        <input
                            id="Monto"
                            name="Monto"
                            type="text"
                            class="form-control"
                            class="form-control"
                            placeholder="0.0"
                            autoComplete="off"
                            //value={user.tel}
                            onChange={ (ev) => { valueToMonto(ev.target.value)} }
                        />
                        &nbsp;&nbsp;<label htmlFor="np">Siguiente Pago </label>&nbsp;&nbsp;
                        <input
                            id="np"
                            name="np"
                            type="date" 
                            class="form-control"
                            placeholder="00/00/0000"
                            autoComplete="off"
                            //value={this.state.sp}
                            onChange={ (ev) => { valueToNp(ev.target.value)} }
                        />

                    </div>
                    <br/><br/>
                    &nbsp;&nbsp;
                    <br/><br/>
                    &nbsp;&nbsp;
                    <input 
                        onClick={crea_pago}
                        type="button" 
                        class="btn btn-primary" 
                        value="Agregar"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="btn btn-primary" href="/list_soc">Listado de socios</a>
                
            </div>
        </>
    );
}



export default Pagos;