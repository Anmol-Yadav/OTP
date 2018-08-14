var connection=require('../db');

if(connection){
	console.log("connection established");

}

var Tasks={

	getcontacts: function(callback){
		return connection.query('SELECT * From student',callback);
	
	},
	getMessage: function(callback){
		return connection.query('SELECT * From message ORDER BY time DESC',callback);
	
	},
	getdetails:function(number,callback){
		
		return connection.query('SELECT * FROM student WHERE Phone = (?)',number,callback)
	},
	addcontact: function(Task, callback){
		console.log(Task);
		connection.query("Insert into student values(?,?,?,?)",[Task.fname,Task.lname,Task.Phone,Task.gender],callback);
		return Task;
	},
	saveMsg:function(Task,callback){
		
		connection.query("Insert into message values(?,?,?,?)",[Task.name,Task.number,Task.text,new Date()],callback);
		return Task;
	}

};
module.exports=Tasks;