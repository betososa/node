var app = {};
app.debug = true
var request = require('request');

 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var CronJob = require('cron').CronJob;


// Callback to make request to finance ws
function onConnect(db){
	if (app.debug) console.log("OnConnect");
	var collection = db.collection( 'stocks' );
	request('http://finance.yahoo.com/webservice/v1/symbols/AAPL,%5EDJI,GOOGL,%5EIXIC/quote?format=json', function (error, response, body){
		if (error) throw error;
		// we made a request, no errors
		onRequest(body, collection, db);
	});
}

// we have db, collection and request, now go and save it!
function onRequest(body, collection, db){
	if (app.debug) console.log("onRequest");
	body = JSON.parse(body);
	collection.insert(body, function(error, docs){
		if (error) throw error;
		db.close()
	});
}

// CronJob for executing requests every second
new CronJob('* * * * * *', function(){
	if (app.debug) console.log("Running CronJob");
MongoClient.connect( 'mongodb://127.0.0.1:27017/finance', function( err, db ) {
	if ( err ) throw err;
	// We have a conenction
	onConnect(db);
})
}, null, true, "America/Los_Angeles");