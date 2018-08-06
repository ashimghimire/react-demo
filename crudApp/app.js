var express=require('express');
var app=express();

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
	next();	
});

app.get('/login', function(req, res) {

	res.send({loggedIn:true});

});

app.listen(3000);