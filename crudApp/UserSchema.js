const mongodb=require('mongodb');
const mongoose=require('mongoose');

var UserSchema= new mongoose.Schema({
		name: String,
		email: String,
		facebook_id: String
});

var Users=mongoose.model('Users', UserSchema);

module.exports={
	Users
}