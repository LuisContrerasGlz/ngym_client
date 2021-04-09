import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Nue_pag from "../containers/pagos";
import 'bootstrap/dist/css/bootstrap.min.css';

function a_pag(props) {
  console.log("--------------------------------------------");  
  console.log(props.match.params.id);  
  console.log("--------------------------------------------");
  return (
    <Router>
        <NavBar />
        <Nue_pag />
    </Router>
  );
}

export default a_pag;