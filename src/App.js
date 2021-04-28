
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


import Home from './components/Home';
import QRgen from './components/QRgenerator';
import QRscan from './components/QRscanner';
import Plantilla from "./components/Plantilla";
import Gracias from "./components/Gracias";
import Perfil from "./components/Perfil";



function App() {
  
  
  return (
    
        <Router>
          

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_generator">
                <QRgen/>
              </Route>
              <Route path="/qr_scanner">
                <QRscan/>
              </Route>

              <Route path="/plantilla">
              
              <Plantilla>
              </Plantilla>
              </Route>

              <Route path="/Gracias">
                <Gracias/>
              </Route>

              <Route path="/Perfil">
                <Perfil/>
              </Route>

            </Switch>

         
        </Router>
  );
     
}

export default App;
