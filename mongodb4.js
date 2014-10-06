var rest = require("restler");
var async = require("async");
var MongoClient = require('mongodb').MongoClient;

var collectionName = "course_events";

function getEvents(i, callback) {
  var page = "?page=" + i;
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/events' + page).on('complete', function(data) {
  if (data instanceof Error)  {
    console.log('Error: ', data.message);
    this.retry(1000);
  }
  else {
    callback(null, data);
  }
  });
};
 
// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_slow(input){ 
    return input.reduce(function(a, b) {
      return a.concat(b);
  }, []);
}
  
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    console.log(">> Dropping collection " + collectionName);
    db.dropCollection(collectionName, function(err, result) {
      console.log("dropped: ");
      console.dir(result);
    });

    async.map([1], getEvents, function(err, results) {
      
      flattened = flatten_slow(results);    
      
      var collection = db.collection(collectionName);

      collection.insert(flattened, function(err, insertResults) {

        collection.find().toArray(function(err, findResults) {
          findResults.forEach(function(x) {
            console.log(x.type + ' in repo ' + x.repo.name + ' on ' + x.created_at);
          });
            // Let's close the db
          db.close();
        });

      })
    });

})