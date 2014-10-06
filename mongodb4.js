// Node.js objects
var rest  = require('restler');
var url   = require('url');
var fs    = require('fs');
var async = require("async");
var mongo = require('mongodb').MongoClient;

// OAuth
if (!fs.existsSync('oauth.token')) {
	console.log("Please put your OAuth token for github in the file 'oauth.token'");
	process.exit(1);
}
token = new String(fs.readFileSync('oauth.token')).trim();

// Flatten function
function flatten_fast(input) {	
    var flattened=[];
    for (var i=0; i<input.length; ++i) {
        var current = input[i];
		if (Array.isArray(current))
        	for (var j=0; j<current.length; ++j)
            	flattened.push(current[j]);
    }
	return flattened;
}

// Async call
function getClassEventsForPage(i, callback){
	// Url 
	queryUrl = url.format({
		protocol: 'https',
		host:     'api.github.com',
		pathname: '/orgs/CSCI-4830-002-2014/events',
		query:    {"access_token": token, page: i}
	});

	// Get data
	rest.get(queryUrl).on('complete', function(data) { callback(null, data); });
};
 
var colName = 'github_events';

// Connect to DB 
mongo.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	if (err) throw err;
 
	console.log(">> Dropping collection");
	db.dropCollection(colName, function(err, result) {
		console.log("dropped: ");
		console.dir(result);
	});

	// Async call
	async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
		flattened = flatten_fast(results);	
		var collection = db.collection(colName);
		collection.insert(flattened, function (err, result) {

			// Locate all the entries using find
			collection.find().toArray(function(err, results) {
				results.forEach(function(x){
					console.log("repo.name:" + x.repo.name + 
								", actor.login:" + x.actor.login +
								", type:" + x.type);
				});
				// Let's close the db
				db.close();
			});
		});       
	});
});

