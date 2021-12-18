const express = require('express')

const Usuario = require('../models/Usuario')
const Solicitud = require('../models/Solicitud')

const rutas = express.Router()

rutas.post('/crear_solicitud', async (req, res) => {
    let solicitud = new Solicitud(req.body)
    await solicitud.save()

    res.json({mensaje: "Solicitud creada correctamente"})
})

rutas.get('/get_solicitud', async (req, res) => {
    res.json(await solicitud())
})


const solicitud = async () => {
    const solicitud = await Solicitud.find()
    return solicitud
}


module.exports = rutas