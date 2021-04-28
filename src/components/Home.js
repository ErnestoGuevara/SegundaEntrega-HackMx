import React from 'react';
import  {Button} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";
import "../CSS/home.css";
import Header from "../components/Header"


function Home() {

    // const [mostrargenerador,actualizarGenerador]=useState(true);
    
//   const consultarApi=async ()=>{
//     const api= await fetch("https://api.wolframalpha.com/v1/simple?i=What+is+the+price+of+gold%3F&appid=DEMO");
//     const wolfram= await api.json();
//     console.log(wolfram);

//   }


    return (
        <div className="elemento">
            
            <Header/>

            <div className="contenedor-home">
                
                {/* <div className="Generador-QR">
                        <h2>Generar Código QR</h2>
                        <p>Generar código QR unico para abrir plantilla unica.</p>
                        
                        <Link to="/qr_generator">   
                            <Button variant="contained" size="medium" color="secondary">
                                <Icon 
                                style={{padding:10}}
                                path={mdiQrcode}
                                title="QR Generator"
                                size={10}
                                color="white"
                                />
                            </Button>
                        </Link>

                    </div> */}
                        
                    <div className="Scanner-QR">
                        <h2>Escanear Código QR</h2>
                        <p>Escanear código QR del INE del ciudadno para validar que sea esa persona.</p>
                        <Link to="/qr_scanner">
                        <Button variant="contained" size="medium" color="secondary">
                            <Icon 
                            style={{padding:10}}
                            path={mdiQrcodeScan}
                            title="QR Scanner"
                            size={10}
                            color="white"
                            />
                        </Button>
                        </Link>  

                </div>

             
                {/* <Button variant="contained" size="medium" color="secondary" onClick={consultarApi}>API</Button> */}

            </div>
               
                   
               
     
        
        </div>
    );
  }
  export default Home;