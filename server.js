const express = require('express');
const opn = require('opn');

const app = express();
const PORT = process.env.PORT || 2000;
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logfile.log' })
  ]
});

// Exemplo de uso
logger.info('Raphael Lima Serrano');

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    
    opn(`http://localhost:${PORT}`);
});