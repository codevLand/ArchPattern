const express = require('express')
// const cors = require('cors')
const routes = require('../api')
const config = require('../config')

const app = express();

/**
 * Health Check endpoints
 * @TODO Add system resource utility matrix
 */
app.get("/status", (req, res) => {
  res.status(200).end();
});
app.head('/status', (req, res) => {
  res.status(200).end()
})
  
/**
 * Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
 * It shows the real origin IP in the heroku or Cloudwatch logs 
 */
// app.enable('trust proxy')

/**
 * Enable Cross Origin Resource Sharing to all origins by default
 */  
// app.use(cors())

/** 
 * Lets you use PUT or DELETE in places where the client doesn't support it */
// app.use(require('method-override')())

/**  
 * Middleware that transforms the raw string of req.body into json 
 * */
// app.use(bodyParser.json())
/** Load API routes */
 app.use(config.api.prefix, routes())

/** 
 * catch 404 and forward to error handler 
 * */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

/// error handlers
app.use((err, req, res, next) => {
  /**
   * Handle 401 thrown by express-jwt library
   */
  if (err.name === 'UnauthorizedError') {
    return res
      .status(err.status)
      .send({ message: err.message })
      .end();
  }
  return next(err);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});

module.exports = app