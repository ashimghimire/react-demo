var express = require("express");
var router = express.Router();
var {Issues} = require('./IssueSchema');
var connnection = require('./connection');

router.post('/issue', function(req, res){
		
	var issue=new Issues(req.body.data);
	issue.save(function(err,issue){
		res.status(200).send(issue);
	});
});

router.get('/issue', function(req,res) {
	Issues.find(function(err, issues){
		res.status(200).send(issues);
	});	
});

router.get('/issue/:id', function(req,res) {
	Issues.findOne({ id : req.params.id } , function(err, issue){
		res.status(200).send(issue);
	});	
});

module.exports=router;