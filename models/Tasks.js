var connection=require('../db');

if(connection){
	console.log("connection established");

}

var Tasks={

	getcontacts: function(callback){
		return connection.query('SELECT * From student',callback);
	
	},
	addcontact: function(Task, callback){
	
		connection.query("Insert into student values(?,?,?)",[Task.ID,Task.name,Task.number],callback);
		return Task;
	},
	saveMsg:function(Task,callback){
		
		connection.query("Insert into message values(?,?,?)",[Task.name,Task.number,Task.text],callback);
		return Task;
	}

};
module.exports=Tasks;