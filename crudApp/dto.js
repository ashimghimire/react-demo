	const fs = require('fs');
	const mysql=require('mysql');
	const connection=require('./connection');
	const {Users}=require('./UserSchema');

	
	var findUserById = (id) => {
		// var db=connection.connect();
		// Users.findOne({facebook_id:'10208724549165891'}, function(err, validUser){
		//  console.log(result);
		// });	
		// db.close();

	}

	var fetchIssue = ()=>{
	  try { 
	    const issueString = fs.readFileSync('issue-data.json');
	    return issues=JSON.parse(issuesString);
	  } catch (e) { 
	    return [];
	  }
	}

	var saveIssue=(issues)=>{
	  fs.writeFileSync('notes-data.json', JSON.stringify(issues));
	}

	var addIssue = (issue) => {  
	  var issues=fetchIssue();
	  var issue = {
	    title:issue.title,
	    status:status=issue.status,
	    createdby:issue.createdby,
	    createdat:issue.createdat
		};

  var issue = issues.filter((issue)=>issue.title===issue.title);
  
  if (issue.length===0) {
    issues.push(issue);
    saveNote(issues);
  }

};

var getAll = () => {
 return fetchIssue();
};

var getIssue = (issue) => {
  var issues=fetchNote();
  var issue=issues.filter((issue) => issue.title === issue);
  return issue[0];
};

var removeIssue = (issue) => {
  var issues = fetchIssue();
  var filteredIssue = issues.filter((issue) => { issue.title===issue });
  saveNote(filteredIssue);
};

module.exports = {
  addIssue,
  getIssue,
  getIssue,
  removeIssue,
  findUserById
};
