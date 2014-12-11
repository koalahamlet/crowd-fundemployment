// Configuration
var CAMPAIGN_GOAL = 1000; // Your fundraising goal, in dollars

// Initialize an Express app
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// Can parse POST requests
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/static", express.static(__dirname + '/static')); // Serve static files

var portnum = 1337
app.listen(portnum); // The best port
console.log("App running on http://localhost:"+portnum);

// Serve homepage
app.get("/",function(request,response){

    // TODO: Actually get fundraising total
    response.send(
        "<link rel='stylesheet' type='text/css' href='/static/fancy.css'>"+
        "<h1>Your Crowdfunding Campaign</h1>"+
        "<h2>raised ??? out of $"+CAMPAIGN_GOAL.toFixed(2)+"</h2>"+
        "<a href='/fund'>Fund This</a>"
    );

});

// Serve funding page
app.get("/fund",function(request,response){
    response.sendfile("fund.html");
});