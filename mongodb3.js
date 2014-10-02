var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
var address = 'https://api.github.com/orgs/CSCI-4830-002-2014/events'
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
  //this prints out the address of the website I am reading from. 
  console.log("Getting info from address: " + address)
  db.dropCollection('test_insert_github', function(err, result) {
    console.dir(result);
  });
  
  rest.get(address).on('complete', function(data) {
 
    // Create a collection to store the results from github
    var collection = db.collection('challenge_2');
    collection.insert(data, function(err, docs) {
 
       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log("name:" + x.actor.login + ", event type:" + x.type + ", repo " + x.repo.name);
        });
        // Let's close the db
        db.close();
      });       
    });
  });
})