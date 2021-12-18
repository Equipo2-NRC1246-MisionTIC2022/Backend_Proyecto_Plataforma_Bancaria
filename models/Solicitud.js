const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const SolicitudSchema = new Schema({
    id_user:Number,
    valor: Number,
    cuotas: Number,
    comentarios: String
})

const Solicitud = mongoose.model('solicitudes', SolicitudSchema)

module.exports = Solicitud