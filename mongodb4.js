var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;

function removeOldDb(){
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
    console.log(">> Dropping collection");
    db.dropCollection('test_insert_github', function(err, result) {
       console.log("dropped: ");
       console.dir(result);
    });
    db.close();
  })
}

function getData(){
  var i;
  var allData;
  for(i=1; i<=10; i++){
    rest.get('https://api.github.com/repositories?page='+i).on('complete', function(data) {
      saveDataToMongo(data);
      console.log(data);
    });
    delete data;
  }
}

function saveDataToMongo(data){
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
     var collection = db.collection('test_insert_github');
     collection.insert(data, function(err, docs) {
      if(err) throw err;
     });
     db.close();
  });
}

function printData(){
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
  var collection = db.collection('test_insert_github');
  collection.find().toArray(function(err, results) {
    results.forEach(function(x){
      console.log("name:" + x.name + ", owner.login:" + x.owner.login);
    });
    db.close();
  });
}

removeOldDb();
getData();