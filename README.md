# Name
Dawson Botsford

# How many points have you earned?
100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?
[loading]

# What is the most difficult part about this week's challenge?
[loading]

# Show and tell (9 points)

## Link (2 points)

[SQL vs NoSQL Database Differences Explained with few Example DB](http://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/)

## What are the limitations of SQL? How are NoSQL solutions trying to address them (name three)? (7 points)
1. SQL databases have a predefined schema, so you have less flexibility in your data formatting. NoSQL allows for dynamic schema for unstructured data.
2. SQL databases are not good for heirarchical data storage. NoSQL fixes this by having the data stored as key-value pairs.
3. SQL databases only scale vertically, so fragmenting data may be more difficult. NoSQL fixes this by having horizontal scaling.


# Tableau (II) (3 points x 4 + 5 points x 7 = 47 points)

## Checkpoints

### 1 (3 points)

![image](http://i.imgur.com/RdRBjpg.png)

### 2 (3 points)

![image](http://i.imgur.com/f4svcXm.png)

### 3 (3 points)

![image](http://i.imgur.com/raMVpms.png)

### 4 (3 points)

![image](http://i.imgur.com/ZyqdUpq.png)

## Challenges

### 1 (5 points)

![image](http://i.imgur.com/U0z3fiS.png)

In our map, we have the color gradient as profit. So to find a not-very-profitable city, we are looking for a gray circle. And in order for this grey-circled city to also have big sales figures, we want a large circle. This leaves us with many options, but Miami and Atlanta are what I chose.

### 2 (5 points)

![image](http://i.imgur.com/wb2mfko.png)

The most profitable combination is corporate technology. 

### 3 (5 points)

![image](http://i.imgur.com/0kSKQkU.png)
We are looking for pie charts where one of the three colors is barely represented. On this map we see that Argentina has a very small amount of profit in the furniture department. Yet again similar to egypt is Poland, which has difficulty turning a profit in office supplies.

### 4 (5 points)

![image](http://i.imgur.com/lmIpUol.png)
Durango, Colorado and Galesburg, Illinois had a low profit in comparison to the rest of the US for home office - delivery truck combo. Boise, Idaho had a low profit also for the combo of consumer - regular air.

### 5 (5 points)

![image](http://i.imgur.com/sT4P8Kh.png)
In the consumer segment Taxes outperformed Cali IF ALL YOU LOOK AT IS COLOR. You can see this with the red vs. green. Here is something peculiar though, Cali actually had a higher profit. Texas was at approx $16,200 while $18,100. So Cali was actually higher! But cali's profit string is surrounded with the "()" characters. So maybe it is a string parsing error. In which case the answer is home office with Texas truming in at $13,000 higher.

### 6 (5 points)

![image](http://i.imgur.com/gcmhj7L.png/)
Boss, we are paying too much! Check out the color gradient on Wyoming, South Dakota, etc.. It costs more to ship to these locations. We found this out by getting the average shipping cost as a color gradient. This is likely because roads are more sparse.

### 7 (5 points)
Filtered by order quantity:
![image](http://i.imgur.com/UzC3h2d.png)<br>
We began this visualization by filtering by sum(sales). Colorado has a sum of $132k, so the filter for sales is 121k - 150k. 
<br>
* Colorado has a total sale of $132.2k
* Alabama, Wisconsin, Maryland, and New Jersey
* Order quantity differs. Wisconsin wiped the floor
* Dimensions are always unique like region. Clearly a different region of the US will have a different "region" field
* We stand out as the worst in sum(profit). Especially considering our 2014 per capita income. We are one of the highest in per capita income and one of the lowest in sum(profit).
<br>Profit graph with per capit included:
![image](http://i.imgur.com/DgHrSZG.png)


# MongoDB 1

## Checkpoints (5 points x 4 + 6 points x 4 = 44  points)

### 1 (5 points)

![image](http://i.imgur.com/G3qaJNY.png)

### 2 (5 points)

![image](http://i.imgur.com/VFfTajO.png)

### 3 (5 points)

![image](image.png?raw=true)

### 4 (5 points)

![image](image.png?raw=true)

## Challenges


### 1 (6 points)

![image](image.png?raw=true)

[mongodb1.js](mongodb1.js)

### 2 (6 points)

![image](image.png?raw=true)

[mongodb2.js](mongodb2.js)

### 3 (6 points)

![image](image.png?raw=true)

[mongodb3.js](mongodb3.js)

### 4 (6 points)

![image](image.png?raw=true)

[mongodb4.js](mongodb4.js)
