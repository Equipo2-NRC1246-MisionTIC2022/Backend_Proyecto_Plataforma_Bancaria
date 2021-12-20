const express = require('express')

const Usuario = require('../models/Usuario')
const Solicitud = require('../models/Solicitud')
const Contacto = require('../models/Contacto')
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

rutas.post('/contacto_cliente', async (req, res) => {
    let contacto = new Contacto(req.body)
    await contacto.save()

    res.json({mensaje: "Mensaje enviado correctamente"})
})

rutas.put('/actualizar_usuario/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id_usuario

    const usuario = await Usuario.findOne({id:id_usuario})

    usuario.nombre = req.body.nombre
    usuario.nacimiento = req.body.nacimiento
    usuario.ingresos = req.body.ingresos
    usuario.egresos = req.body.egresos

    await usuario.save()

    res.json({mensaje: "Usuario actualizado correctamente"})

})


module.exports = rutas