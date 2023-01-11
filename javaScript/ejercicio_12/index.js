const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),

    ],
});


function errorPer (valor){
    throw new Error("Valor no admitido");
}
let prueba = "hola";

try{
    errorPer();
}
catch(e){
    logger.error(e.toString());
}
