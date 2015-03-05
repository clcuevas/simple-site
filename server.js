var express = require("express");
var app = express();
var port = process.env.PORT || 3000; //add a listener/port

var possible = "ABCDEFGabcdefg012345";

app.get("/possible", function(req, res) {
  var random = Math.floor(Math.random() * possible.length);
  res.send(possible[random]);
});

var contacts = [
  { name: "Claudia",
    phone: "206-555-5555" },
  { name: "Tiana",
    phone: "626-555-5555" },
  { name: "Mom",
    phone: "714-555-5555" },
  { name: "Dad",
    phone: "714-666-6666" }
];

app.get("/contacts", function(req, res) {
  var random = Math.floor(Math.random() * contacts.length);
  res.send(contacts[random]);
});

app.get("/", function(req, res) {
  res.send("hello, universe!");
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
