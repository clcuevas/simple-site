var express = require("express"); // expressJS is required
var app = express();
var bodyparser = require("body-parser"); //body-parser is required
var piglatinify = require("./lib/piglatinify.js");
var port = process.env.PORT || 3000;

var quotes = [
	"I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison.",
	"No matter where you go, there you are.",
	"If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. -Rear Admiral Grace Hopper, USN, Ph.D"
	];

var jokes = [
	{setup: "What's the difference between a guitar and a fish?", punchline: "You can't tuna fish."},
	{setup: "What do you get when you cross a cow and a duck?", punchline: "Milk and quackers."},
	{setup: "How many tickles does it take to make an octopus laugh?", punchline: "Ten Tickles"}
];

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); //DO NOT REMOVE THIS LINE

//tells express where app files are and to use them
app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
	res.send(index.html); //telling server the home/ index html page
});

app.get("/quotes", function(req, res) {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	res.send(quotes[randomIndex]);
});

app.get("/jokes", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.post("/piglatin", function(req, res) {
	var firstname = piglatinify(req.body.firstname);
	var lastname = piglatinify(req.body.lastname);
	var piglatined = { firstname: firstname, lastname: lastname };
	res.json(piglatined);
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});

