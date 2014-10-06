var GitHubApi = require("github");
var async = require("async");
var MongoClient = require('mongodb').MongoClient;

var github = new GitHubApi({
  // required
  version: "3.0.0",
  // optional
  timeout: 5000
});

function getClassEventsForPage(i, callback){
  github.events.getFromOrg({
    org: "CSCI-4830-002-2014",
    page: i
  }, callback);
};

// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){
  return input.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}


MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if(err) throw err;

  console.log(">> Dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  var collection = db.collection('test_github'); 

  async.map([1,2,3,4, 5, 6, 7, 8, 9, 10], getClassEventsForPage, function(err, results){
    flattened = flatten_fast(results);
    console.log(flattened)
    collection.insert(flattened, function(err, docs) {  
       // Locate all the entries using find
      console.log(collection.find());     
    });
  });
  // Let's close the db
  db.close();
});
