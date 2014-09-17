var path = require("path");
var express = require("express");

var app = express();

app.use(express.static(__dirname));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("conference on port " + port)

app.get('/conference', function(req,res){
	
	res.json({"gov":"conference"});

})

