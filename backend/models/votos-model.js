const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const votosSchema = new Schema({
 
    
    partido: String,
    votos: Number,
    idPerfil: String

  
}, {
  timestamps: true,
});

const Votos = mongoose.model('Votos', votosSchema);

module.exports = Votos;