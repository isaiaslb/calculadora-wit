const mongoose = require('mongoose')

var DB_User = 'root'
var DB_Pass = encodeURIComponent('x!TQ4SBkySTv7dh')

mongoose.connect(`mongodb+srv://${DB_User}:${DB_Pass}@clustercalculadora.yuea2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('conectado ao mongodb!')
})
.catch((erro) => console.log(erro))

mongoose.Promise = global.Promise

module.exports = mongoose
