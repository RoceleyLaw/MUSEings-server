var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var User = require('./api/models/museings-api-model');
var bodyParser = require('body-parser');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/userdb');
mongoose.connect('mongodb://roceleylaw:museings1234@ds163699.mlab.com:63699/museings');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', 'https://roceleylaw.github.io/MUSEings-web-app/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


var routes = require('./api/routes/museings-api-routes');
routes(app);

app.listen(port);
console.log('Museings RESTful API server started on: ' + port);
