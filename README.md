# Name

Jake White

# How many points have you earned?

0/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

7

# What is the most difficult part about this week's challenge?

 - MongoDB + NodeJS + Github API 
 - getting the mongo software to work

# Show and tell (9 points)

## Link (2 points)

[What are the limitations of SQL?](http://www.quora.com/What-are-the-limitations-of-SQL)

## What are the limitations of SQL? How are NoSQL solutions trying to address them (name three)? (7 points)

"SQL relations must have a fixed set of columns.  This is a frequent annoyance of software developers, and drives the demand for non-relational databases."
"Maximum memory utilized by SQL Server Database Engine is 1GB"
"SQL can't handle recursion"

# Tableau (II) (3 points x 4 + 5 points x 7 = 47 points)

## Checkpoints

### 1 (3 points)



![image](http://i.imgur.com/WaCndOj.png)

### 2 (3 points)

![image](http://i.imgur.com/Kx61fzS.png)

### 3 (3 points)

![image](http://i.imgur.com/aS8RaYf.png)

### 4 (3 points)

![image](http://i.imgur.com/9Jo6Jtg.png)

## Challenges

### 1 (5 points)

![image](http://i.imgur.com/uERlFwz.png)

{{Florida and Georgia make a lot of money, but not a lot of profit. Had trouble loading city data measurement, so it is sorted by state.}}

### 2 (5 points)

![image](http://i.imgur.com/BC4TSLO.png)

{{ the highest total profit came from the corperate customers within the technology department}}

### 3 (5 points)

![image](http://i.imgur.com/5Xi67XY.png)

{{ france is similar to eygpt in that nearly 50% of their profit comes from the technology departmen and a very small portion of their respected profits come from office supplies.}}

### 4 (5 points)

![image](http://i.imgur.com/jtkjlXp.png)

{{It looks as if consumer's using delivery trucks in California are not profitting very much. Also, Home Offices using delivery trucks in Colorado are not very successfull. Home office customers using regular air in montana do not do very well.}}

### 5 (5 points)

![image](http://i.imgur.com/GDExpkw.png)

{{ within the consumer customer segment california was significantly out preformed by texas in terms of profit}}

### 6 (5 points)

![image](http://i.imgur.com/ixbKL1Q.png)

{{within this visualisation, state average delivery cost of delivery trucks is sorted by each state. Here we see Montana has a high average shipping cost (~$63) associated with delivery truck methods, when compared to North Dakota's average shipping cost of ~$35}}

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
