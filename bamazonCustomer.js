var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: '!Monique776',
    database: 'bamazonDB'
});

connection.connect(function(err) {
    console.log("Connected as id: "+connection.threadId);
});

var start = function(){
    inquirer.prompt([{
        name: "ID name",
        type: "input",
        message: "What is the name of the ID you would like to buy?",
    },{
        name: "Number of Units",
        type: "input",
        message: "How many units would you like tp buy?",
        validate: function(value){
            if(isNaN(value)==false){
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer){
        connection.query("INSERT INTO products SET ?",{
            productName: answer.productName,
            stockQuanity: answer.stockQuanity
        },function(err,res){
            start();
        })
    })
}