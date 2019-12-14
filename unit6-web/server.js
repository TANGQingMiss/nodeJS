console.info('---http create basic server---');
console.info();

var http = require('http'); //import http module
http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h3>Node.js --- HTTP</h3>');
    res.end('<p>Create Basic HTTP Server!</p>');
}).listen(6868);

var options = {
    hostname:'localhost',
    port:6868,
    path:'/',
    method:'POST'
};

var req = http.request(options,function (res) {
    console.log('STATUS: '+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function (chunk) {
        console.log('BODY: '+chunk);
    })
});

//listen error event
req.on('error',function (e) {
    console.log('problem with request: '+e.message);
});

req.write('data\n');
req.end();

//response header
