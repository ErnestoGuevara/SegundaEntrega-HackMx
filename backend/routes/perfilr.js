const router = require('express').Router();
let Perfil = require('../models/perfil-model');

router.route('/').get((req, res) => {
  Perfil.find()
    .then(personas => res.json(personas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nombre = req.body.nombre;
  const sexo = req.body.sexo;
  const domicilio = req.body.domicilio;
  const clave = req.body.clave;
  const curp = req.body.curp;
  const añoregistro = req.body.añoregistro;
  const fechanacimiento = req.body.fechanacimiento;
  const seccion = req.body.seccion;
  const vigencia = req.body.vigencia;
  
  const nuevoPerfil = new Perfil({
    nombre,
    sexo,
    domicilio,
    clave,
    curp,
    añoregistro,
    fechanacimiento,
    seccion,
    vigencia
  });


  nuevoPerfil.save()
    .then(() => res.json('Perfil agregado!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Perfil.findById(req.params.id)
    .then(personas => res.json(personas))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;