const Result = require('../models/resultado');
const criarCsv = require('csv-writer').createObjectCsvWriter;

exports.GravarCSV = async () => {
    const dado = await Result.find()

    const csv = criarCsv({
        path: 'src/csv/log.csv',
        header: [
          {id: 'id', title: 'id'},
          {id: 'tipo', title: 'tipo'},
          {id: 'resultado', title: 'resultado'},
          {id: 'ip', title: 'ip'},
        ]
      })
      
      
      csv
        .writeRecords(dado)
        .then(()=> console.log('Csv criado!'))
}
