//mySQL
var http = require('http');
var mysql = require('/usr/local/node_modules/mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodejs',
    port:3306
});
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.write('<h3>node js test with mysql</h3>');

    connection.connect(function (err) {
        if(err){
            res.end('<p>error connected to mysql</p>');
            return;
        }else{
            res.end('<p>sucess connection</p>');
        }
    });
}).listen(6868);
