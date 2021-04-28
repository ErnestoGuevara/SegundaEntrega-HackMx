import React, { Fragment, useState } from 'react';
import axios from "axios";
import Header from "../components/Header";
import "../CSS/plantilla.css";
import PAN from "../img/pan.png";
import PRD from "../img/prd.png";
import MORENA from "../img/morena.png";
import PRI from "../img/pri.png";
import VERDE from "../img/verde.png";
import PT from "../img/Pt.png";
import MOVIMIENTO from "../img/Movimiento.png";
import PES from "../img/PES.png";
import RSP from "../img/RSP.png";
import FUERZA from "../img/Fuerza.png";
import { Link } from 'react-router-dom';

let contadorPri=0;
let contadorPrd=0;
let contadorPan=0;
let contadorMorena=0;
let contadorVerde=0;
let contadorPt=0;
let contadorMovimiento=0;
let contadorPes=0;
let contadorRSP=0;
let contadorFSM=0;


const Plantilla = () => {
    
    let [nombre,setNombre]=useState("");
    let [idNombre,setIdnombre]=useState("");
    
        axios.get("http://localhost:5000/Perfil/").then(response=>{
            
            const listaId=[response.data[0]._id, response.data[1]._id, response.data[2]._id, response.data[3]._id]
            const listaNombres=[response.data[0].nombre, response.data[1].nombre, response.data[2].nombre, response.data[3].nombre];
            if(window.location.pathname===`/plantilla/${listaId[0]}`){
                window.history.replaceState(null, "", `/plantilla/${listaId[0]}`);
                setNombre(listaNombres[0]);
                setIdnombre(listaId[0]);
            }else if(window.location.pathname===`/plantilla/${listaId[1]}`){
                window.history.replaceState(null, "", `/plantilla/${listaId[1]}`);
                setNombre(listaNombres[1]);
                setIdnombre(listaId[1]);
            }
            else if(window.location.pathname===`/plantilla/${listaId[2]}`){
                window.history.replaceState(null, "", `/plantilla/${listaId[2]}`);
                setNombre(listaNombres[2]);
                setIdnombre(listaId[2])
            }
            else if(window.location.pathname===`/plantilla/${listaId[3]}`){
                window.history.replaceState(null, "", `/plantilla/${listaId[3]}`);
                setNombre(listaNombres[3]);
                setIdnombre(listaId[3]);
            }else{
                alert("Usuario no encontrado");
                // window.location.replace("/");
            }
           
    
    
            
            }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
            });

   

       
    


    const clickPRI=()=>{
        contadorPri++;
        alert("Voto guardado");
            console.log(`Votos de PRI: ${contadorPri}`);

            axios.post("http://localhost:5000/Plantilla/add", {partido:"PRI",votos: contadorPri, idPerfil: idNombre }).then(response =>{
                console.log(response);
            })
        
            
    }
    const clickPRD=()=>{
        contadorPrd++;
        alert("Voto guardado");
        console.log(`Votos de PRD: ${contadorPrd}`); 
        axios.post("http://localhost:5000/Plantilla/add", {partido:"PRD",votos: contadorPrd, idPerfil: idNombre }).then(response =>{
                console.log(response);
            })      
    }
    const clickPAN=()=>{
        contadorPan++;
        alert("Voto guardado");
        console.log(`Votos de PAN: ${contadorPan}`); 
        axios.post("http://localhost:5000/Plantilla/add", {partido:"PAN",votos: contadorPan, idPerfil: idNombre }).then(response =>{
                console.log(response);
            })      
    }
    const clickMORENA=()=>{
        contadorMorena++;
        alert("Voto guardado");
        console.log(`Votos de Morena: ${contadorMorena}`);    
        axios.post("http://localhost:5000/Plantilla/add", {partido:"MORENA",votos: contadorMorena, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })   
    }
    const clickVERDE=()=>{
        contadorVerde++;
        alert("Voto guardado");
        console.log(`Votos de Verde: ${contadorVerde}`);   
        axios.post("http://localhost:5000/Plantilla/add", {partido:"VERDE",votos: contadorVerde, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })    
    }
    const clickPT=()=>{
        contadorPt++;
        alert("Voto guardado");
        console.log(`Votos de Partido del Trabajo: ${contadorPt}`);  
        axios.post("http://localhost:5000/Plantilla/add", {partido:"PT",votos: contadorPt, idPerfil: idNombre }).then(response =>{
            console.log(response);
        }) 
    }
    const clickMOVIMIENTO=()=>{
        contadorMovimiento++;
        alert("Voto guardado");
        console.log(`Votos de Movimiento Ciudadano: ${contadorMovimiento}`);  
        axios.post("http://localhost:5000/Plantilla/add", {partido:"MOVIMIENTO",votos: contadorMovimiento, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })     
    }
    const clickPES=()=>{
        contadorPes++;
        alert("Voto guardado");
        console.log(`Votos de Partido Encuentro Solidario: ${contadorPes}`);   
        axios.post("http://localhost:5000/Plantilla/add", {partido:"PES",votos: contadorPes, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })  
    }
    const clickRSP=()=>{
        contadorRSP++;
        alert("Voto guardado");
        console.log(`Votos de Redes Sociales Progresistas: ${contadorRSP}`);  
        axios.post("http://localhost:5000/Plantilla/add", {partido:"RSP",votos: contadorRSP, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })    
    }
    const clickFSM=()=>{
        contadorFSM++;
        alert("Voto guardado");
        console.log(`Votos de Fuerza Social Por México: ${contadorFSM}`);   
        axios.post("http://localhost:5000/Plantilla/add", {partido:"FSM",votos: contadorFSM, idPerfil: idNombre }).then(response =>{
            console.log(response);
        })     
    }

    
        
    return ( 
        <Fragment>
           
            
            <h1>Plantilla de: {nombre} </h1>
            <Header/>
            <div className="contenedor">
            <div className="container">
                <div className="card">
                    <div className="imgBx" data-text="PRI">
                        <img src={PRI} alt="PRI"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>PRI</h2>
                            <p>Partido Revolucionario Institucional</p>
                            <Link to="/Gracias" onClick={clickPRI} id="PRI">Votar</Link>

                        </div>
                        
                    </div>
                </div>


                <div className="card">
                    <div className="imgBx" data-text="PRD">
                        <img src={PRD} alt="PRD"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>PRD</h2>
                            <p>Partido de la Revolucion Democrática</p>
                            <Link to="/Gracias" onClick={clickPRD} id="PRD">Votar</Link>

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="PAN">
                        <img src={PAN} alt="PAN"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>PAN</h2>
                            <p>Partido Accion Nacional</p>
                            <Link to="/Gracias" onClick={clickPAN}>Votar</Link>
                            

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="MORENA">
                        <img src={MORENA} alt="MORENA"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>Morena</h2>
                            <p>Movimiento de Regeneración Nacional</p>
                            <Link to="/Gracias" onClick={clickMORENA}>Votar</Link>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="VERDE">
                        <img src={VERDE} alt="VERDE"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>VERDE</h2>
                            <p>Partido Verde</p>
                            <Link to="/Gracias" onClick={clickVERDE}>Votar</Link>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="PT">
                        <img src={PT} alt="PT"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>PT</h2>
                            <p>Partido del Trabajo</p>
                            <Link to="/Gracias" onClick={clickPT}>Votar</Link>
                             

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="MOVIMIENTO">
                        <img src={MOVIMIENTO} alt="MOVIMIENTO"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>MOVIMIENTO CIUDADANO</h2>
                            <p>Movimiento Ciudadano</p>
                            <Link to="/Gracias" onClick={clickMOVIMIENTO}>Votar</Link>
                            

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="PES">
                        <img src={PES} alt="PES"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>PES</h2>
                            <p>Partido Encuentro Solidario</p>
                            <Link to="/Gracias" onClick={clickPES}>Votar</Link>
                           

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="RSP">
                        <img src={RSP} alt="RSP"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>RSP</h2>
                            <p>Redes Sociales Progresistas</p>
                            <Link to="/Gracias" onClick={clickRSP}>Votar</Link>
                            

                        </div>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx" data-text="FUERZA">
                        <img src={FUERZA} alt="FUERZA"></img>
                    </div>
                    <div className="content">
                        <div>
                            <h2>Fuerza Social por México</h2>
                            <p>Fuerza Social por México</p>
                            <Link to="/Gracias" onClick={clickFSM}>Votar</Link>
                            

                        </div>
                        
                    </div>
                </div>


            </div>

        </div>

        </Fragment>
        
     );
}
 
export default Plantilla;