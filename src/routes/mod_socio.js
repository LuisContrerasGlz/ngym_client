import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from "react-dom";

function Mod_socio(props) {
    const [user,setUser]=useState({});
 
    useEffect(()=> {
        console.log(props.match.params.id);
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            id: props.match.params.id
        };
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

   
    function valueToName_c(name_c) {
        setUser({
            name_c: name_c
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'Nombre',
            valor: name_c,
            id: props.match.params.id
        };
        console.log(newUser);
        axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        //axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    function valueToTel(tel) {
        setUser({
            tel: tel
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'telefono',
            valor: tel,
            id: props.match.params.id
        };
        console.log(newUser);
        axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        //axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToEmail(email) {
        setUser({
            email: email
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'correoe',
            valor: email,
            id: props.match.params.id
        };
        console.log(newUser);
        axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        //axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToDir(dir) {
        setUser({
            dir: dir
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'direccion',
            valor: dir,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    function valueToCol(col) {
        setUser({
            col:col
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'colonia',
            valor: col,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToCity(city) {
        setUser({
            city: city
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'ciudad',
            valor: city,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToState(state) {
        setUser({
            state: state
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'estado',
            valor: state,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToCp(cp) {
        setUser({
            cp: cp
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'codpos',
            valor: cp,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
      function valueToMd(md) {
        setUser({
            md: md
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'miembro_desde',
            valor: md,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToNp(np) {
        setUser({
            np: np
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'ultimo_pago',
            valor: np,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }
    function valueToPer(per) {
        setUser({
            per: per
        })
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: 'periodo',
            valor: per,
            id: props.match.params.id
        };
        console.log(newUser);
        //axios.post('https://gymevolucion.herokuapp.com/act_user',newUser)
        axios.post('http://localhost:3001/act_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    function modify_user(){
    }    
    
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
                            onChange={ (ev) => { valueToName_c(ev.target.value)} }
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="tel">Telefono </label>&nbsp;&nbsp;
                        <input
                            id="tel"
                            name="tel"
                            type="text"
                            class="form-control"
                            class="form-control"
                            placeholder="999-999-99-99"
                            autoComplete="off"
                            value={user.tel}
                            onChange={ (ev) => { valueToTel(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="email">Correo Electronico </label>&nbsp;&nbsp;
                        <input
                            id="email"
                            name="email"
                            type="email"
                            class="form-control"
                            placeholder="micorre@gmail.com"
                            autoComplete="off"
                            value={user.email}
                            onChange={ (ev) => { valueToEmail(ev.target.value)} }
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="dir">Dirección</label>&nbsp;&nbsp;
                        <input
                            id="dir"
                            name="dir"
                            type="text"
                            class="form-control"
                            placeholder="dirección"
                            autoComplete="off"
                            value={user.dir}
                            onChange={ (ev) => { valueToDir(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="col">Colonia</label>&nbsp;&nbsp;
                        <input
                            id="col"
                            name="col"
                            type="text"
                            class="form-control"
                            placeholder="colonia"
                            autoComplete="off"
                            value={user.col}
                            onChange={ (ev) => { valueToCol(ev.target.value)} }
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="ciu">Ciudad</label>&nbsp;&nbsp;
                        <input
                            id="city"
                            name="city"
                            type="text"
                            class="form-control"
                            placeholder="ciudad"
                            autoComplete="off"
                            value={user.city}
                            onChange={ (ev) => { valueToCity(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="edo">Estado</label>&nbsp;&nbsp;
                        <input
                            id="state"
                            name="state"
                            type="text"
                            placeholder="Estado"
                            class="form-control"
                            autoComplete="off"
                            value={user.state}
                            onChange={ (ev) => { valueToState(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="cod">Codigo Postal</label>&nbsp;&nbsp;
                        <input
                            id="cp"
                            name="cp"
                            type="text"
                            class="form-control"
                            placeholder="00000"
                            autoComplete="off"
                            value={user.cp}
                            onChange={ (ev) => { valueToCp(ev.target.value)} }
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="md">Miembro desde </label>&nbsp;&nbsp;
                        <input
                            id="md"
                            name="md"
                            type="date"
                            class="form-control"
                            placeholder="00/00/0000"
                            autoComplete="off"
                            value={user.md}
                            onChange={ (ev) => { valueToMd(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="sp">Siguiente Pago </label>&nbsp;&nbsp;
                        <input
                            id="np"
                            name="np"
                            type="date"
                            class="form-control"
                            placeholder="00/00/0000"
                            autoComplete="off"
                            value={user.np}
                            onChange={ (ev) => { valueToNp(ev.target.value)} }
                        />

                        &nbsp;&nbsp;<label htmlFor="pe">Periodo </label>&nbsp;&nbsp;
                        <select id="pe" 
                            name="pe" 
                            value={user.per}
                            class="form-control" 
                            onChange={ (ev) => { valueToPer(ev.target.value)} }
                        >
                        <option >Choose...</option>
                        <option selected>Mensual</option>
                        <option>Semanal</option>
                        <option>Dia</option>
                        </select>
                    </div>
                    <br/><br/>
                    &nbsp;&nbsp;
                    <a class="btn btn-primary" href="/list_soc">Modificar</a>
                
            </div>
        </>
    );
}



export default Mod_socio;