var CronJob = require('cron').CronJob;

var { GravarCSV } = require('./gravarCSV');

// A cada dois minutos grava no csv 

const jobCsv = new CronJob('0 */2 * * * *', function () {
    GravarCSV();
});

jobCsv.start()