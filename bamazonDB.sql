DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
id INTEGER NOT NULL AUTO_INCREMENT,
ProductName VARCHAR(75),
DepartmentName VARCHAR(50) NOT NULL,
Price INTEGER DEFAULT 0,
StockQuanity INTEGER DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO products (ProductName,DepartmentName,Price,StockQuanity)
VALUES ("Furmax Metal Bar Stool" , "Furniture" , 79.99 , 25),
("Luxury Bath Towel Set Strip Black" , "Bed & Bath" , 39.35 , 10),
("Utopia Comforter Duvet Dark Blue" , "Bed & Bath" , 23.99 , 5),
("Wake In Cloud Comforter Set" , "Bed & Bath" , 64.80 , 5),
("Lion King Shower Curtain" , "Bed & Bath" , 25.00 , 2),
("LG Smart Refrigerator" , "Appliances" , 899.25, 50),
("Xbox One" , "Electronics", 299.99 , 3),
("Heater/Cooling" , "Appliances" , 16.99 , 8),
("Sectional Green Lounge" , "Furnture" , 595.55 , 10),
("Ketchup 16oz" , "Grocery" , 2.99 ,30),
("Vizio 65in Television" , "Electronics", 599.45 , 15),
("24 Case Water" , "Grocery" , 2.99 , 10),
("Mixed Bag of 24pk Chips" , "Grocery" , 6.99 , 15);


