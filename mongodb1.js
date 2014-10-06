var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
var collectionName = "course_repositories";
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
  console.log(">> Dropping collection");
  db.dropCollection(collectionName, function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });
 
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(data) {
 
    // Create a collection to store the results from github
    var collection = db.collection(collectionName);
    collection.insert(data, function(err, docs) {
 
       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log('NAME [' + x.name + "] -- LOGIN [" + x.owner.login + ']');
        });
        // Let's close the db
        db.close();
      });       
    });
  });
})