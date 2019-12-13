//get current working directory process.cwd()
console.log('Current directory: ' + process.cwd());

//change directory
//process.chdir('/t/Desktop/');

//get process pid
console.log(process.pid);
console.log(process.title);
console.log(process.version);//show node version
console.log(process.versions);//show properties of node
//console.log(process.config);//show process configuration

//std input - output
process.stdin.setEncoding('utf8');
process.stdin.on('readable',function () {
    var chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write("print data:"+chunk+'\n');
    }
});
process.stdin.on('end',function () {
    process.stdout.write('end.\n');
});

console.info();
console.info('-----process std input and output---');
//std error
// var fs = require('fs');
// var file = 'err.txt';
// var encoding = 'UTF-8';
// fs.readFine(file,encoding,function (err,data) {
//     if(err){
//         setTimeout(function () {
//             process.stderr.write('err:'+err+'\n');
//         },1000);
//     }else{
//         console.log(data);
//     }
// });
//
// console.info();
// console.info('----process std err-----');