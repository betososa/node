var express = require('express');
var router = express.Router();
var request = require('request');

 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/hola', function(request, response, next){
	MongoClient.connect( 'mongodb://127.0.0.1:27017/finance', function( err, db ) {
		var collection = db.collection( 'stocks' );
		collection.find().toArray(function(err, items) {
			console.dir(items);
			response.render('report', {data : items});
		})
	})
})

module.exports = router;
