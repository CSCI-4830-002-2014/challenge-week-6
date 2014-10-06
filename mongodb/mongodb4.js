var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
var GitHubApi = require("github");
var async = require("async");

var github = new GitHubApi({
  version: "3.0.0",
});

function getClassEventsForPage(i, callback){
  github.events.getFromOrg({
      org: "CSCI-4830-002-2014",
      page: i
    }, callback);
};

function flatten_fast(input){
  return input.reduce(function(a, b) {
      return a.concat(b);
    }, []);
};
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

  console.log(">> Dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });

  async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results) {
    data = flatten_fast(results);

    var collection = db.collection('test_insert_github');
    collection.insert(data, function(err, docs) {

       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
           console.log("type:" + x.type + ", actor:" + x.actor.login) + ", repo:" + x.repo.name;
        });
        // Let's close the db
        db.close();
      });
    });
  });
})
