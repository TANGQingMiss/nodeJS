//create child process by spawn()
var spawn = require('child_process').spawn;
var ls_var = spawn('ls',['-lh','/Users/t/Desktop']);

ls_var.stdout.on('data',function (data) {
    console.log('stdout: '+data);
});

//by exec()
// var exec = require('child_process').exec;
// var child = exec('cat child_process.js',function (error,stdout,stderr) {
//     console.log('cat child_process.js stdout:');
//     console.log(stdout);
// });

//use spawn to attach system command
var cp = require('child_process');
var cat = cp.spawn('cat');

cat.stdout.on('data',function (d) {
    console.log(d.toString());
});

cat.on('exit',function () {
    console.log('cat on exit');
});

cat.on('close',function () {
    console.log('cat on close');
});

cat.stdin.write('cat on data');
cat.stdin.end();

//find child process pid
var grep_node = spawn('grep',['top']);
console.log('spawned child pid of node:'+grep_node.pid);
grep_node.stdin.end();
console.info();

//method fork
var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.info('current computer cpu number: '+cpus.length);
for(var i = 0; i<cpus.length;i++){
    console.log('Fork a new child process now...');
    fork('./worker.js');
}
