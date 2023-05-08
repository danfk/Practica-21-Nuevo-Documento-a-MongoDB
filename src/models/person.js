const mongoose =  require ('mongoose');

let PersonSchema = new mongoose.Schema({
        nombre: String,
        edad: String,
        tipoSangre: String,
        nss: String
});

module.exports = mongoose.model('Person', PersonSchema);