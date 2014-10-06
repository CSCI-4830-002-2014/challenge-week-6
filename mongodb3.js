var rest = require('./node_modules/restler');
var async = require('./node_modules/async');
var MongoClient = require('./node_modules/mongodb').MongoClient;


function getEventData(pageNum,callback){
  console.log("Within eventData");
  requestUrl = "/orgs/csci-4830-002-2014/events"
  rest.get('https://api.github.com' + requestUrl + '?page=' + pageNum).on('complete',function(data) {
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 

  var basename = 'challenge3';
  console.log("Writing to collection: " + basename );
  var collection = db.collection(basename);
  collection.insert(data, function(err, docs) {
  console.log("Insert data from page: " + pageNum);
  }); //End insert
  db.close();
  }) //End connection
  console.log("End event data.\n");

}) //end rest
}

function flatten_fast(input){ 
  console.log("Within flatten");
// TODO: Use a faster implementation
// (ref: http://jsperf.com/flatten-an-array-loop-vs-reduce)
  var flattened = [];
  for (var i=0; i<input.length; ++i) {
      var current = input[i];
      for (var j=0; j<current.length; ++j)
          flattened.push(current[j]);
  }
  return flattened;
}
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 

  var basename = 'challenge3';
  console.log("Writing to collection: " + basename );
  var collection = db.collection(basename);

async.map([1,2,3,4,5,6,7,8,9,10], getEventData, function(err, results){
  flattened = flatten_fast(results);    
  console.log(JSON.stringify(flattened, undefined, 4));
  // collection.insert("Hello", function(err, docs) {

  // });
});


  // rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events').on('complete', function(data) {
  // var basename = 'challenge3'
  // console.log("Writing to collection: " + basename );
  //   // Create a collection to store the results from github
  //   var collection = db.collection(basename);
  //   collection.insert(data, function(err, docs) {
 
  //      // Locate all the entries using find
  //     collection.find().toArray(function(err, results) {
  //       results.forEach(function(x){
  //         console.log("repo.name:" + x.repo.name + ", actor.login:" + x.actor.login);
  //       });
  //       // Let's close the db
  //       db.close();
  //     });       
  //   });
  // });

}) //End mongoClient connect



