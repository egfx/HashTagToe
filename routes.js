var mongodb = require('mongodb');             
var breezeMongo = require('breeze-mongodb');
var fs = require('fs');

var host = 'localhost';
var port = 27017;
var dbName = 'TicTacToeDatabase';
var dbServer = new mongodb.Server(host, port, {auto_reconnect: true});
var db = new mongodb.Db(dbName, dbServer, {strict:true, w: 1});
db.open(function () { });