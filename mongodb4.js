var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
var async = require("async");
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
  
  console.log(">> Dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  function restle_events(){
      rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events').on('complete', function(data) {
 
      // Create a collection to store the results from github
      var collection = db.collection('github_events_data');
      collection.insert(data, function(err, docs) {
        console.log("error here.");
         // Locate all the entries using find
        collection.find().toArray(function(err, results) {

         results.forEach(function(x){
            console.log("Event:" + x.type + ", Creator.login:" + x.actor.login);
          });
          // Let's close the db
          db.close();
        });       
      });
    });
  };
  function flatten_fast(input){
    return input.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  } 

  async.map([1,2,3,4,5,6,7,8,9,10], restle_events, function(err, results){
    flattened = flatten_fast(results);
    console.log(JSON.stringify(flattened, undefined, 4));
  });
});