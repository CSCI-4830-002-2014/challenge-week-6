var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

  console.log(">> Dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events').on('complete', function(data) {

    // Create a collection to store the results from github
    var collection = db.collection('test_insert_github');
    collection.insert(data, function(err, docs) {

       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log("event type: " + x.type + ", Login:" + x.actor.login + ", Repo name: " + x.repo.name);
        });
        // Let's close the db
        db.close();
      });
    });
  });
})
