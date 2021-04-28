const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const perfilSchema = new Schema({
    nombre: String,
    sexo: String,
    domicilio: String,
    clave: String,
    curp: String,
    añoregistro: String,
    fechanacimiento: String,
    seccion: String,
    vigencia: String
}, {
  timestamps: true,
});

const Perfil = mongoose.model('Perfil', perfilSchema);

module.exports = Perfil;