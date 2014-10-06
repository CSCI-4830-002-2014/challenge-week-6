var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events').on('complete', function(data) {
  var basename = 'challenge4'
  console.log("Writing to collection: " + basename );
    // Create a collection to store the results from github
    var collection = db.collection(basename);
    collection.insert(data, function(err, docs) {
 
       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log("repo.name:" + x.repo.name + ", actor.login:" + x.actor.login);
        });
        // Let's close the db
        db.close();
      });       
    });
  });
})