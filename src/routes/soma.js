const express = require('express')
const router = express.Router()

const Result = require('../models/resultado')

router.get('/', async (req, res) => {

    var a = req.query.a
    var b = req.query.b

    if (a == null || a == "" || a == undefined) {
        return res.status(422).send({ erro: true, message: 'Informe o elemento A, por favor.' })
    }

    if (b == null || b == "" || b == undefined) {
        return res.status(422).send({ erro: true, message: 'Informe o elemento B, por favor.' })
    }

    var conteudo = {
        tipo: 'soma',
        resultado: (Number(a) + Number(b)),
        ip: req.socket.remoteAddress 
    }

    try {

        await Result.create(conteudo)
        const id_final = await Result.findOne().sort({ field: 'asc', _id: -1 })
       
        var id = '' + id_final._id

        return res.status(201).send({ erro: false, resultado: ((Number(a) + Number(b))), id: id })

    } catch {

        return res.status(500).send({ erro: true })

    }


});

module.exports = router;