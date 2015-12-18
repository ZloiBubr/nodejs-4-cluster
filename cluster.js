var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    if( signal ) {
      console.log('worker ' + worker.process.pid + ' was killed by signal: '+signal);
    } else if( code !== 0 ) {
      console.log('worker ' + worker.process.pid + ' exited with error code: '+code);
    } else {
      console.log('worker ' + worker.process.pid + 'success!');
    }    
  });
} else {
    require("./app.js");
}

