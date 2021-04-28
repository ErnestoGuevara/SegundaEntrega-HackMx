import Header from "./Header";
import React,{Fragment,useState} from 'react';
import USUARIO from "../img/usuario.png";
import "../CSS/perfil.css";
import  {Button} from '@material-ui/core';
import axios from "axios";
import QRcode from 'qrcode.react';



const Perfil = () => {
    const [qr, setQr] = useState('');
    // const handleChange = (event) => {
    //     setQr(event.target.value);
    //     console.log(event.target.value);
    // };
    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

        
    let [nombre,setNombre]=useState("");
    let [sexo,setSexo]=useState("");
    let [domicilio,setDomicilio]=useState("");
    let [clave,setClave]=useState("");
    let [curp,setCurp]=useState("");
    let [año,setAño]=useState("");
    let [fecha,setFecha]=useState("");
    let [seccion,setSeccion]=useState("");
    let [vigencia,setVigencia]=useState("");
    console.log(window.location);
    

    
    const consultarBdd= ()=>{
        axios.get("http://localhost:5000/Perfil/").then(response=>{
            
            const listaId=[response.data[0]._id, response.data[1]._id, response.data[2]._id, response.data[3]._id]
            const listaNombres=[response.data[0].nombre, response.data[1].nombre, response.data[2].nombre, response.data[3].nombre];
            const listaSexo=[response.data[0].sexo, response.data[1].sexo, response.data[2].sexo, response.data[3].sexo];
            const listaDomicilio=[response.data[0].domicilio, response.data[1].domicilio, response.data[2].domicilio, response.data[3].domicilio];
            const listaClave=[response.data[0].clave, response.data[1].clave, response.data[2].clave, response.data[3].clave];
            const listaCurp=[response.data[0].curp, response.data[1].curp, response.data[2].curp, response.data[3].curp];
            const listaAño=[response.data[0].añoregistro, response.data[1].añoregistro, response.data[2].añoregistro, response.data[3].añoregistro];
            const listaFecha=[response.data[0].fechanacimiento, response.data[1].fechanacimiento, response.data[2].fechanacimiento, response.data[3].fechanacimiento];
            const listaSeccion=[response.data[0].seccion, response.data[1].seccion, response.data[2].seccion, response.data[3].seccion];
            const listaVigencia=[response.data[0].vigencia, response.data[1].vigencia, response.data[2].vigencia, response.data[3].vigencia];


            if(window.location.pathname===`/Perfil/${listaId[0]}`){
                window.history.replaceState(null, "", `/Perfil/${listaId[0]}`)
            
                setNombre(listaNombres[0]);
                

                setSexo(listaSexo[0]);
            

                setDomicilio(listaDomicilio[0]);

                setClave(listaClave[0]);

                setCurp(listaCurp[0]);

                setAño(listaAño[0]);

                setFecha(listaFecha[0]);

                setSeccion(listaSeccion[0]);

                setVigencia(listaVigencia[0]);

                setQr(`${window.location.origin}/plantilla/${listaId[0]}`);

                console.log(response.data[0]);
            
                
            }else if(window.location.pathname===`/Perfil/${listaId[1]}`){
                window.history.replaceState(null, "", `/Perfil/${listaId[1]}`)
                setNombre(listaNombres[1]);
                

                setSexo(listaSexo[1]);
            

                setDomicilio(listaDomicilio[1]);

                setClave(listaClave[1]);

                setCurp(listaCurp[1]);

                setAño(listaAño[1]);

                setFecha(listaFecha[1]);

                setSeccion(listaSeccion[1]);

                setVigencia(listaVigencia[1]);

                setQr(`${window.location.origin}/plantilla/${listaId[1]}`);


        
                console.log(response.data[1]);

            }else if(window.location.pathname===`/Perfil/${listaId[2]}`){
                window.history.replaceState(null, "", `/Perfil/${listaId[2]}`)
                setNombre(listaNombres[2]);
                

                setSexo(listaSexo[2]);
            

                setDomicilio(listaDomicilio[2]);

                setClave(listaClave[2]);

                setCurp(listaCurp[2]);

                setAño(listaAño[2]);

                setFecha(listaFecha[2]);

                setSeccion(listaSeccion[2]);

                setVigencia(listaVigencia[2]);

                setQr(`${window.location.origin}/plantilla/${listaId[2]}`);


                console.log(response.data[2]);
                
            
                
            }else if(window.location.pathname===`/Perfil/${listaId[3]}`){
                window.history.replaceState(null, "", `/Perfil/${listaId[3]}`)

                setNombre(listaNombres[3]);
                

                setSexo(listaSexo[3]);
            

                setDomicilio(listaDomicilio[3]);

                setClave(listaClave[3]);

                setCurp(listaCurp[3]);

                setAño(listaAño[3]);

                setFecha(listaFecha[3]);

                setSeccion(listaSeccion[3]);

                setVigencia(listaVigencia[3]);

                setQr(`${window.location.origin}/plantilla/${listaId[3]}`);



                console.log(response.data[3]);
            }
            
            else{
                alert("Usuario no encontrado.")
            }
            
        }).catch(err => {
                     // Do something for an error here
                     console.log("Error Reading data " + err);
                   });;
            
    }

    
    

    return ( 
        <Fragment >
             <Header/>
        <div className="contenedor-principal">
           
            <div className="contenedor-perfil">
                <img src={USUARIO} alt="Usuario"></img>
                <div className="informacion">
                    <div className="nombre-sexo">
                        <div className="nombre">

                            <h3>Nombre: </h3>
                            <p id="nombre">{nombre}</p>

                        </div>
                        <div className="sexo">
                            <h3>Sexo: </h3>
                            <p id="sexo">{sexo}</p>
                        </div>
                    </div>

                    <div className="domicilio">
                        <h3>Domicilio: </h3>
                        <p id="calle">{domicilio}</p>

                    </div>

                    <div className="clave">
                        <h3>Clave de elector: </h3>
                        <p id="clave">{clave}</p>
                    </div>

                    <div className="curp-año">
                        <div className="curp">
                            <h3>CURP: </h3>
                            <p id="curp">{curp}</p>
                        </div>
                        <div className="año">
                            <h3>Año de registro: </h3>
                            <p id="año">{año}</p>
                        </div>
                    </div>

                    <div className="fecha-seccion-vigencia">
                        <div className="fecha">
                            <h3>Fecha de nacimiento: </h3>
                            <p id="fecha">{fecha}</p>
                        </div>
                        <div className="seccion">
                            <h3>Seccion: </h3>
                            <p id="seccion">{seccion}</p>
                        </div>

                        <div className="vigencia">
                            <h3>Vigencia: </h3>
                            <p id="vigencia">{vigencia}</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="generador-QR">
                  {
                      qr ?
                      
                      <QRcode 
                          id="myqr"
                          value={qr} 
                          size={320}
                          includeMargin={true}
                          
                      />:
                      <p>No QR code preview</p>
                  }
                  
            </div>
            <Button variant="contained" size="medium" color="secondary" onClick={consultarBdd} className="botongenerar">Verficiar</Button>
            <Button variant="contained" onClick={downloadQR} style={{marginBottom:50}} color="secondary" className="botongenerar">Descargar</Button>
            


        </div>
       
        </Fragment>
       
     );
}
 
export default Perfil;