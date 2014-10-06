var GitHubApi = require("github");
var async = require("async");
var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;

var github = new GitHubApi({
  version: "3.0.0",
  timeout: 1000
});

function getClassEventsForPage(i, callback){
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events?page=' + i).on('complete', function(result){
    console.log("1");
    callback(null, result); 
  });
};

function flatten_fast(input){
  return input.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}


MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db){
  if (err) throw err;
  console.log(">> dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  var collection = db.collection('test_insert_github');
  
  //async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
  async.map([1,2], getClassEventsForPage, function(err, results){
    flattened = flatten_fast(results);
    console.log(results);
    console.log("2");
    
    collection.insert(results, function(err, docs) {
      console.log(err);
      console.log("3");
      db.close();
    });
    console.log("4");
//    console.log(JSON.stringify(flattened, undefined, 4));
  });
});
