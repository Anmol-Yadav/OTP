var mysql= require('mysql');
	
var connection =  mysql.createPool({
    host:'sql12.freemysqlhosting.net',
    user:'sql12251891',
    password:'vsltr6RtMB',
    database:'sql12251891',
           connectionLimit: 100,
        connectTimeout: 60 * 60 * 1000,
        acquireTimeout: 60 * 60 * 1000,
        supportBigNumbers: true,
        bigNumberStrings: true,
        charset: 'utf8mb4_unicode_ci',
        multipleStatements: true
        });




module.exports=connection;