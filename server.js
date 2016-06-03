
import express from 'express';
var http = require('http');
var expressGraphql = require('express-graphql');
// var Schema = require('./src/schema');
import Schema from './src/schema';

const app = express();
const port = 3000;

app.set('port', port);


app.use('/', expressGraphql({
  schema: Schema,
  graphiql: true
}));


var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}