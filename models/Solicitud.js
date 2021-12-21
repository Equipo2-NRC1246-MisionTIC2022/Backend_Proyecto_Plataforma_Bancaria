const mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const SolicitudSchema = new Schema({
    codigo: String,
    id_user:Number,
    valor: Number,
    cuotas: Number,
    comentarios: String,
    prorroga: Boolean,
    razon_prorroga: String,
    cuotas_prorroga: Number,
    estado_prorroga: Number,
    cuotas_pagadas: Number,
    cuotas_pendientes: Number,
    cuota_capital: Number,
    interes: Number,
    estado_solicitud: Number,
})

const Solicitud = mongoose.model('solicitudes', SolicitudSchema)

module.exports = Solicitud