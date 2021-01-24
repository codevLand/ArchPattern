/**
  * Here goes logger setup
  */

const winston = require('winston');
const config = require('../config');

const transports = [];
if(process.env.NODE_ENV !== 'development') {
  transports.push(
    new winston.transports.Console()
  )
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      )
    })
  )
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.simple()
    /**
     * Exchangables: prettyPrint(), simple(), json()
     */
  ),
  transports
});

module.exports = LoggerInstance;


  //   // winston.format.prettyPrint(),
  //   winston.format.errors({ stack: true }),
  //   winston.format.splat(),
  //   winston.format.colorize(),
  //   winston.format.prettyPrint()
  //   // winston.format.simple()
  //   // winston.format.json()
  // ),
  // transports
  //   /**
  //    * @TODO add process.env.NODE_ENV settable error log file
  //    * using winston.transports.Stream (fs)
  //    */