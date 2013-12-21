'use strict';

exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};


/*
 * GET users listing.
 */

exports.equipmentList = function(req, res){

    var MongoClient = require('mongodb').MongoClient
        , format = require('util').format;

    MongoClient.connect('mongodb://localhost:27017/zti', function(err, db) {
        if(err) throw err;
        var collection = db.collection('equipment');

        collection.find().sort({ id: 1}).toArray(function(err, results) {
            //console.dir(results);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.json(results);
            // Let's close the db
            db.close();
        });
    });
};

/*
 * DELETE equipment params.
 */

exports.equipmentParamDelete = function(req, res){

    var MongoClient = require('mongodb').MongoClient
        , format = require('util').format;

    MongoClient.connect('mongodb://localhost:27017/zti', function(err, db) {
        if(err) throw err;
        var collection = db.collection('equipment');

        collection.find().sort({ id: 1}).toArray(function(err, results) {
            //console.dir(results);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.json(results);
            // Let's close the db
            db.close();
        });
    });
};


/*
 * DELETE equipment params.
 */

exports.equipmentSave = function(req, res){

    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb://localhost:27017/zti', function(err, db) {
        if(err) throw err;
        var collection = db.collection('equipment');

        collection.findOne({id : Number(req.params.id)}, function(err, item) {
          /*  item.genData[1].value.rus = 'Fuck it works!';
            collection.save(item, function(err, item){
                console.log('Err' + err + ' Item: '+ item);
            });*/
        });
    });
};
