var data = require('./result7.json');

var MongoClient = require('mongodb').MongoClient;

//This is commented out for now because I am being rate limited by github. To run proeprly, uncomment and change hte source for data varaible
// var GitHubApi = require("github");
// var async = require("async");

// var github = new GitHubApi({
//     // required
//     version: "3.0.0",
//     // optional
//     timeout: 5000
// });
 
// function getClassEventsForPage(i, callback){
//   github.repos.getFromOrg({
//       org:"CSCI-4830-002-2014",
//       page: i
//   }, callback);
// };
 
// // [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
// function flatten_fast(input){ 
//     return input.reduce(function(a, b) {
//       return a.concat(b);
//   }, []);
// }
// async.map([1,2,3,4,5,6,7,8,9,10], getClassEventsForPage, function(err, results){
 
//   flattened = flatten_fast(results);    
  
//   data = JSON.stringify(flattened, undefined, 10);

// });

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
    console.log(">> Dropping collection");
    console.log(data)

    db.dropCollection('test_insert_github', function(err, result) {
      console.log("dropped: ");
      console.dir(result);
  });
    // Create a collection to store the results from github
    var collection = db.collection('challenge_4');
    collection.insert(data, function(err, docs) {
 
       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log("name: " + x.full_name + " --- id: " + x.owner.login);
        });
        // Let's close the db
        db.close();
      });       
    });
})