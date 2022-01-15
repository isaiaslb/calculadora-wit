const express = require('express')
const job = require('./job/job')


const soma = require('./routes/soma')
const divisao = require('./routes/divisao')
const multiplicacao = require('./routes/multiplicacao')
const subtracao = require('./routes/subtracao')
const pesquisa = require('./routes/pesquisa')

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
   return  res.json({data: "Rodando!"})
})

app.use('/soma', soma)
app.use('/divisao', divisao)
app.use('/multiplicacao', multiplicacao)
app.use('/subtracao', subtracao)
app.use('/pesquisa', pesquisa)


app.listen(8080, () => {
    console.log("Rodando na porta 8080!")
})