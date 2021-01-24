const config = require( './config')
const app = require( "./engine/express" );
const Logger = require( './engine/logger')

/**
 * @todo add async
 */ 
function startServer() {

  require('./engine')
  
  app.listen(config.port, () => {
    Logger.info(
      `Server listening on port: ${config.port}`
    );
  }).on('error', err => {
    Logger.error(err);
    process.exit(1);
  });

}

startServer();