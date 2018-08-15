const mongodb=require('mongodb');
const mongoose=require('mongoose');
var connection=mongoose.connect('mongodb://localhost:27017/test');

const connect = () => {
	var db=mongoose.connection;
	db.once('open',function(){
		console.log("Connection is now open");
	});
	return db;
};

module.exports ={
	connect:connect
}
	// var loggedInUser = new currentUser({name:'Asim', email:'asimghimire@gmail.com',facebook_id:''});

