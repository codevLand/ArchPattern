/**
 * This config file took inspiration from codeigniter
 */

const dotenv = 'dotenv';

process.env.ENV_VAR ? 'development' : process.env.ENV_VAR;

const envFound = require('dotenv').config();

// Throw error when .env is not found
if (envFound.error) {
  throw new Error("!! Couldn't find .env file !!");
}

module.exports = {
  /**
   * Dock ye, yer port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * You can use URI blocks or use param based database credentials
   * NOTE: only use either URI or param based
   */
  dbURI: process.env.DB_URI || {
    'user': process.env.DB_USERNAME,
    'host': process.env.DB_HOSTNAME,
    'database': process.env.DB_NAME,
    'password': process.env.DB_PASSWD,
    'port': process.env.DB_PORT,
  },
  // dbUser: process.env.DB_USERNAME
  // dbPass: process.env.DB_PASSWORD
  // dbURI: process.env.DB_URI,

  /**
   * Pouring your secret sauce
   * Note: NaCl included
   */
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,

  /**
   * Your (v)logger settings
   */
  logs: {
    level: process.env.LOG_LEVEL || 'debug',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },

  /**
   * Mailer settings and credentials
   */
  // settings here
  
  /**
   * Cronjob settings goes here
   */
  // settings here
};