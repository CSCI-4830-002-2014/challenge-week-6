var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
var async = require('async');

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
  console.log(">> Dropping collection");
  db.dropCollection('github_course_events', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  //rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events').on('complete', function(data) {
  async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
    flattened = flatten_fast(results);    
    //console.log(JSON.stringify(flattened, undefined, 4));
    console.log(flattened)
    collection.insert(flattened, function(err, docs) {
      console.log(collection.find());
    });
  });
  db.close();
})

 function flatten_fast(input) {
  var flattened=[];
    for (var i=0; i<input.length; ++i) {
        var current = input[i];
        for (var j=0; j<current.length; ++j)
            flattened.push(current[j]);
    }
    return flattened;
 }

 function getClassEventsForPage(i, callback) {
  var collection = db.collection('github_course_events');
   var pageIter = 'https://api.github.com/orgs/CSCI-4830-002-2014/events?page=' + i;
   rest.get(pageIter).on('complete', function(data) {
    collection.insert(data, function(err, docs) {
       // Locate all the entries using find
     collection.find().toArray(function(err, results) {
        results.forEach(function(x){
        console.log("id:" + x.id + ", type:" + x.type + ", actor.login:" + x.actor.login);
        });
      });       
    });
  });
 }
 
