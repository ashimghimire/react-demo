var express=require('express');
var app=express();
var dto=require('./js/dto.js');


app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
	next();	
});

app.get('/login', function(req, res) {

	res.send({loggedIn:true});

});

app.get('/issues', function(req,res){
var issues=dto.getAll();
res.send({issues})
});

app.get("/add",function(req,res){

	console.log(req);
});


app.listen(3000);