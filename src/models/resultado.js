const mongoose = require ('../db/db')


const Result = mongoose.model('resultado', {
    tipo: String,
    resultado: Number,
    ip: String,
})

module.exports = Result