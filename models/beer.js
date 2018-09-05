module.exports = function (app) { 
 
    var mongoose = require('mongoose');     
    var Schema = mongoose.Schema;          
    var beer = Schema({         
    	rotulo: { type: String },         
        pais: { type: String },
        cervejaria: { type: String }, 
        teorAlcoolico: { type: Number }, 
        tipo: { type: String }, 
        urlRotulo: { type: String }   
    });     
    return mongoose.model('Beer', beer); 
};