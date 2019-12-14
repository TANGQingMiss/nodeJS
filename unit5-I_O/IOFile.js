//this js is used to control file input and output
//rename
console.log('fs rename()');
var fs = require('fs');
console.time('fs-rename-syn');
fs.renameSync('test.js','test2.js');
console.timeEnd('fs-rename-syn');

var exec = require('child_process').exec;
var child_pre = exec('cat test.js',function (error,stdout,stderr) {
    console.info('cat test.js');
    console.log(stdout);
    console.log(stderr);
});

console.info();
var child_suf = exec('cat test2.js',function (error,stdout,stderr) {
    console.info('cat test2.js');
    console.log(stdout);
    console.log(stderr);
});

//open a file system
var fd = fs.openSync('test2.js','a');
console.info('file expression: '+fd);
console.log('fs.openSync() Done');
console.info();
fs.closeSync(fd);

//change ownership of users
//fs.chown(),fs.chownSync(),fs.fchown(),fs.fchownSync();
//get ownership information
var statSync = fs.statSync('test2.js');
console.info(statSync);

//make a new directory
//fs.mkdirSync();

//read directory
//fs.readdirSync();

//read a file
//fs.readFile(),fs.readFileSync();
var file_path = 'test2.js';
var file_contents = fs.readFileSync('file_path','utf8');
console.log(file_contents);

//write a file
//fs.writeFile(),fs.writeFileSync().