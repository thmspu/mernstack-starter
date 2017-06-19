
"use strict";
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./router');
var config = require('./config');
//global variable to store the database connection
const PORT = process.env.port || 3000;

//serve static folder
app.use(express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.get('/', function(req, res) {
    res.sendfile('index');
});

var server = app.listen(PORT);