const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'combined.log', level: 'debug', options: { flags: 'w' }}),
  ],
  format: winston.format.simple(),
});

module.exports = {logger};