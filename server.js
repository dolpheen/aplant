'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path');

var app = express();


// Express Configuration
app.configure('development', function(){
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(__dirname, '.tmp')));
    app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.errorHandler());
    app.set('views', __dirname + '/app/views');
});

app.configure('production', function(){
    app.use(express.favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('views', __dirname + '/views');
});


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

// Controllers
var api = require('./lib/controllers/api'),
    controllers = require('./lib/controllers');

// Server Routes
app.get('/api/awesomeThings', api.awesomeThings);
app.get('/api/equipmentList', api.equipmentList);
app.get('/api/equipment', api.equipmentList);
app.post('/api/equipment/:id', api.equipmentSave);
app.delete('/api/equipment/param', api.equipmentParamDelete);


// Angular Routes
app.get('/partials/*', controllers.partials);
app.get('/', controllers.index);

// Router needs to be last
app.use(app.router);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});