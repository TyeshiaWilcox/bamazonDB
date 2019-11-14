var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: '!Monique776',
    database: 'bamazonDB'
})

connection.connect(function(err) {
    console.log("Connected as id: "+connection.threadId);
    start();
})

var start = function(){
    inquirer.prompt({
        name: "ProductID",
        type: "input",
        message: "What is your product ID number, you would like to purchase?"
    }).then(function(answer){
        if(answer.ProductID.toUpperCase()== "POST"){
        //unitProduct();
        } else {
        //start();
        }   
    })
}
var unitProduct = function(){
    inquirer.prompt([{
    name: "ProductUnits",
    type: "input",
    message: "How many product units would you like to buy?",
    validate: function(value){
        if(NaN(value)==false){
            return true;
        } else {
            return false;
        }
    }
}]).then(function(answer){
    connection.query("INSERT INTO products SET ?" , {
        productname:answer.product,
        departmentname:answer.department,
        price:answer.price,
        stockquanity:answer.quanity
},function(err,res){
    console.log("Your order created successfully!");
    start();
     })
 })
}