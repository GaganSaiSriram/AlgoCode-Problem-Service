const winston = require('winston');

require('winston-mongodb');

const {LOCAL_LOG_DB_URL} = require('../config/server.config');

 const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
    format : winston.format.combine(

      
        winston.format.colorize(),
        // winston.format.simple()
        winston.format.printf(log => `${log.timestamp} [${log.level}]: ${log.message}`)
        

    )
}));

allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOCAL_LOG_DB_URL,
    collection:'logs',

}))

const logger = winston.createLogger({
    format:winston.format.combine(
        //First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:SS'
        }),
        // Second argument to the combined method,which defines what os exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    

    transports : allowedTransports

});

module.exports = logger;