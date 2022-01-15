const express = require('express');
const Result = require('../models/resultado');
const router = express.Router()

router.get('/:id', async (req, res) => {

    var id = req.params.id

    if (id == null || id == "" || id == undefined) {
        return res.status(422).send({ erro: true, message: 'Informe o id, por favor.' })
    }

    try {
        
        const dado = await Result.findOne({ _id: id })

        return res.status(200).send({ erro: false, data: dado })

    } catch {

        return res.status(500).send({ erro: true })

    }
});

module.exports = router;