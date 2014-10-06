# Name

Jake White

# How many points have you earned?

0/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# What is the most difficult part about this week's challenge?

fill-in-your-answer

# Show and tell (9 points)

## Link (2 points)

[title-of-the-article](http://link-to-an-article-comparing-nosql-and-sql)

## What are the limitations of SQL? How are NoSQL solutions trying to address them (name three)? (7 points)

fill-in-your-answer

# Tableau (II) (3 points x 4 + 5 points x 7 = 47 points)

## Checkpoints

### 1 (3 points)

![image](image.png?raw=true)

### 2 (3 points)

![image](image.png?raw=true)

### 3 (3 points)

![image](image.png?raw=true)

### 4 (3 points)

![image](image.png?raw=true)

## Challenges

### 1 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 2 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 3 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 4 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 5 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 6 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}

### 7 (5 points)

![image](image.png?raw=true)

{{one-paragraph-discussion-of-your-answer}}


# MongoDB 1

## Checkpoints (5 points x 4 + 6 points x 4 = 44  points)

### 1 (5 points)

![image](http://i.imgur.com/21xGX75.png)

### 2 (5 points)

![image](http://i.imgur.com/o3qvNWt.png)

### 3 (5 points)

![image](http://i.imgur.com/vxN47R0.png)

### 4 (5 points)

![image](http://i.imgur.com/ifIRL9u.png)

## Challenges


### 1 (6 points)

![image](http://i.imgur.com/pGlVwtc.png)

[mongodb1.js](var rest = require('restler');
var MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;
 
  console.log(">> Dropping collection");
  db.dropCollection('test_insert_github', function(err, result) {
    console.log("dropped: ");
    console.dir(result);
  });
 
  rest.get('https://api.github.com/orgs/CSCI-4830-002-2014/repos').on('complete', function(data) {
 
    // Create a collection to store the results from github
    var collection = db.collection('test_insert_github');
    collection.insert(data, function(err, docs) {
 
       // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        results.forEach(function(x){
          console.log("name:" + x.name + ", owner.login:" + x.owner.login);
        });
        // Let's close the db
        db.close();
      });       
    });
  });
}))

### 2 (6 points)

![image](image.png?raw=true)

[mongodb2.js](mongodb2.js)

### 3 (6 points)

![image](image.png?raw=true)

[mongodb3.js](mongodb3.js)

### 4 (6 points)

![image](image.png?raw=true)

[mongodb4.js](mongodb4.js)
