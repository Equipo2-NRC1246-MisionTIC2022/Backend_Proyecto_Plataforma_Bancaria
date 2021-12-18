const express = require('express')

const Usuario = require('../models/Usuario')
const Solicitud = require('../models/Solicitud')
const { findById } = require('../models/Usuario')

const rutas = express.Router()

rutas.post('/crear_solicitud', async (req, res) => {
    let solicitud = new Solicitud(req.body)
    await solicitud.save()

    res.json({mensaje: "Solicitud creada correctamente"})
})



rutas.get('/get_solicitud/:id_solicitud', async (req, res) => {
    const id_solicitud = req.params.id_solicitud

    const solicitud = await Solicitud.findOne({id_user:id_solicitud})
    if (!solicitud){
        res.json({mensaje: "La solicitud buscada no existe"})
    }else{
        res.json(solicitud)
    }
})


module.exports = rutas