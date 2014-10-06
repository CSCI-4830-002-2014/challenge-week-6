# Name

Niklas Fejes

# How many points have you earned?

100/100

# How many hours have you spent on this?

6 hours

# What is the most difficult part about this week's challenge?

fill-in-your-answer

# Show and tell (9 points)

## Link (2 points)

[SQL and NoSQL Comparison: When is a NoSQL database a better option than a "traditional" RDBMS?](http://www.datavail.com/category-blog/sql-and-nosql-database-comparison-when-is-a-nosql-database-a-better-option-than-a-traditional-rdbms/)

## What are the limitations of SQL? How are NoSQL solutions trying to address them (name three)? (7 points)

One of the limitations that SQL has is that once you have created a table and started using
it, all data you put in it must have the same data field. An SQL database can be seen as a 
table with fixed columns. What NoSQL is doing is having a collection of key-value pairs,
where the value can be data of any type.

SQL servers are vertically scalable, which means that to get better performance / bigger
capacity you need to increase CPU, RAM, SSD etc. NoQSL databases are vertically scalable,
so to improve performance you can add more servers.

SQL databases are not suited for Big Data data storage, where scalability and storage of
key-value pairs are needed. NoSQL solutions are often designed to address these problems.

# Tableau (II) (3 points x 4 + 5 points x 7 = 47 points)

## Checkpoints

### 1 (3 points)

![image](screenshots/tableau-checkpoint1.png?raw=true)

### 2 (3 points)

![image](screenshots/tableau-checkpoint2.png?raw=true)

### 3 (3 points)

![image](screenshots/tableau-checkpoint3.png?raw=true)

### 4 (3 points)

![image](screenshots/tableau-checkpoint4.png?raw=true)

## Challenges

### 1 (5 points)

![image](screenshots/tableau-challenge1.png?raw=true)

Two of the cities that generated relatively big sales figures but had small profits are 
Durango, CO ($16.6k sales, $13.7k profit) and Bozeman, MT ($15.7k sales, 12.4k profit).

### 2 (5 points)

![image](screenshots/tableau-challenge2.png?raw=true)

The combination Corporate/Technology generated the highest profit. ($1.3M)

### 3 (5 points)

![image](screenshots/tableau-challenge3.png?raw=true)

Two of the countries similar in total sales to Egypt with trouble turning a profit in 
one department are Korea and France.
In both countries the Office Supplies category is relatively small compared to the other
categories.

### 4 (5 points)

![image](screenshots/tableau-challenge4.png?raw=true)

The following cities had been losing significant money with respect to the specified
*customer segment* and *ship mode*:
 * Pekin, IL (Home Office/Delivery truck)
 * Durango, CO (Home Office/Delivery truck)
 * Bozeman, MT (Home Office/Regular air)
 * Boise, ID (Consumer/Regular air)

### 5 (5 points)

![image](screenshots/tableau-challenge5.png?raw=true)

Texas outperformed California in terms of total profits in the *Consumer* customer segment.

### 6 (5 points)

![image](screenshots/tableau-challenge6.png?raw=true)

The upper maps shows the shipping cost for the different shipping modes, and
the lower maps shows the total sales for each mode.

In general the states that have bigger sales also have bigger shipping cost with respect
to the different shipping modes, so I would not say that some states pay too much on average
for shipping by truck.

### 7 (5 points)

![image](screenshots/tableau-challenge7a.png?raw=true)
![image](screenshots/tableau-challenge7b.png?raw=true)

The four states that are closest to Colorado in terms of total sales are
*Maryland*, *Alabama*, *New Jersey* and *Wisconsin*. This is justified by
the first screenshot where the states are listed by sales. The total
sales for Colorado is $132.2k, and the others are in the range $124-149k.

The visualisation compares the total profits (state color) and total sales (dot size/color)
for different *consumer segments* and *departments*.
From the visualization we can see that the combination *Technology/Home office* generates
negative profit in Colorado even though the sales are larger than in Maryland and New Jersey,
where the profits are better. Colorado is also the state that is higest in both sales 
and profit in the *Furniture/Small Business* category, where the other states fall behind.
In terms of *Technology/Consumer*, Colorado has the least sales among the four states.



# MongoDB 1

## Checkpoints (5 points x 4 + 6 points x 4 = 44  points)

### 1 (5 points)

![image](screenshots/mongo-checkpoint1.png?raw=true)

### 2 (5 points)

![image](screenshots/mongo-checkpoint2.png?raw=true)

### 3 (5 points)

![image](screenshots/mongo-checkpoint3.png?raw=true)

### 4 (5 points)

![image](screenshots/mongo-checkpoint4.png?raw=true)

## Challenges


### 1 (6 points)

![image](screenshots/mongo-challenge1.png?raw=true)

[mongodb1.js](mongodb1.js)

### 2 (6 points)

![image](screenshots/mongo-challenge2a.png?raw=true)

[mongodb2.js](mongodb2.js)

### 3 (6 points)

![image](screenshots/mongo-challenge2b.png?raw=true)

[mongodb3.js](mongodb3.js)

### 4 (6 points)

![image](screenshots/mongo-challenge4.png?raw=true)

[mongodb4.js](mongodb4.js)
