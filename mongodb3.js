var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;

var getUrl = 'https://api.github.com/orgs/CSCI-4830-002-2014/events';
var colName = 'github_events';
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	if (err) throw err;
 
	console.log(">> Dropping collection");
	db.dropCollection(colName, function(err, result) {
		console.log("dropped: ");
		console.dir(result);
	});

	rest.get(getUrl).on('complete', function(data) {
 
		// Create a collection to store the results from github
		var collection = db.collection(colName);
		collection.insert(data, function(err, docs) {
 
			// Locate all the entries using find
			console.log("First 20 entries:");
			collection.find().limit(20).toArray(function(err, results) {
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

