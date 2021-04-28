const router = require('express').Router();
let Voto = require('../models/votos-model');

router.route('/').get((req, res) => {
  Voto.find()
    .then(votos => res.json(votos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post ((req, res) => {
    
    const partido= req.body.partido;
    const votos= req.body.votos;
    const idPerfil=req.body.idPerfil;

    const nuevoVoto = new Voto({
     
      partido,
      votos,
      idPerfil
    
    });
    
    
      nuevoVoto.save()
      .then(() => res.json('Voto añadido!'))
      .catch(err => res.status(400).json('Error: ' + err));
    

   
  

   
   

  
  });





module.exports = router;