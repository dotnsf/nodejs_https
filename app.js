//. app.js
var express = require( 'express' );
var app = express();
var settings = require( './settings' );

var fs = require( 'fs' );
var http = require( 'http' );
var https = require( 'https' );
var options = {
  key: fs.readFileSync( settings.key ),
  cert: fs.readFileSync( settings.cert )
};
var https_server = https.createServer( options, app );
var http_server = http.createServer( app );

app.get( '/hello', function( req, res ){
  res.contentType( "text/plain" );
  res.writeHead( 200 );
  res.end( "Hello World." );
});

var http_port = 8080;
var https_port = 8443;

https_server.listen( https_port );
http_server.listen( http_port );

console.log( "server starging on " + http_port + ' / ' + https_port + ' ...' );



