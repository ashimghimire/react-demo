const mongodb=require('mongodb');
const mongoose=require('mongoose');

var IssueSchema = new mongoose.Schema({
		title: String,
		status: String,
		createdBy: String,
		createdOn:String
});

var Issues = mongoose.model('Issues', IssueSchema);

module.exports={
	Issues
}