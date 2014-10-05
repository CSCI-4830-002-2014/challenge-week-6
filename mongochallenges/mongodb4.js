var restler = require('restler');
var MongoClient = require('mongodb').MongoClient;

/*
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

	console.log(">> Dropping collection");
	db.dropCollection('test_insert_github', function(err, result) {
		console.log("dropped: ");
		console.dir(result);
	});
 
	async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results) {
		flattened = flatten_fast(results);
	});

	db.close();
})*/

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

	console.log(">> Dropping collection");
	db.dropCollection('test_insert_github', function(err, result) {
		console.log("dropped: ");
		console.dir(result);
	});

	var collection = db.collection('test_insert_github');

	for (var i = 1; i < 11; i++) {
		var page = 'https://api.github.com/orgs/CSCI-4830-002-2014/events?page=' + i;
		restler.get(page).on('complete', function(data) {
			console.log("inside complete");
    		collection.insert(data, function(err, docs) {
    			console.log("something was added");	
			});
		})
	}

	// Locate all the entries using find
	collection.find().toArray(function(err, results) {
		results.forEach(function(x) {
			console.log("name:" + x.actor.login + ", type:" + x.type);
		});  
    });

	db.close();
})