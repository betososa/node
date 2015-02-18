var request = require('request');

 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var CronJob = require('cron').CronJob;


new CronJob('* * * * * *', function(){
MongoClient.connect( 'mongodb://127.0.0.1:27017/finance', function( err, db ) {
	if ( err ) throw err;
	var collection = db.collection( 'stocks' );
	request('http://finance.yahoo.com/webservice/v1/symbols/AAPL,%5EDJI,GOOGL,%5EIXIC/quote?format=json', function (error, response, body){
		if ( !error && response.statusCode == 200 ){
			console.log('en request');
			body = JSON.parse(body);
			collection.insert(body, function(error, docs) {
				if (error) throw error;
				db.close();
			});
		}
	})
})
}, null, true, "America/Los_Angeles");