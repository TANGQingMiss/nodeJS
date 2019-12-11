//async - series control
console.info("---node.js async series programming---");
console.log("\n");

var async = require("async");

//function series(tasks,callback)
async.series([
    function (callback) {
        callback(null,'hello');
    },
    function (callback) {
        callback(null,'async');
    },
    function (callback) {
        callback(null,'series');
    }
],function (err,results) {
    console.log(results);
});

console.info();
console.info('---node.js async series programming---');

//async - waterfall control
//when the first param of callback isn't null, the waterfall will stop
async.waterfall([
    function (callback) {
        callback(null,1);
    },
    function (data,callback) {
        console.info(data);
        callback('test',2);
    },
    function (data,callback) {
        console.info(data);
        callback(null,3);
    }
],function (err,results) {
    console.log(results);
});

console.info();
console.info('---node.js async waterfall programming---');

//async - parallel limit control
async.parallelLimit([
    function (callback) {
        setTimeout(function () {
            callback(null,'one');
        },1000);
    },
    function (callback) {
        setTimeout(function () {
            callback(null,'two');
        },1000);
    }
],function (err,results) {
    console.log(results);
});

console.info();
console.info('---node.js async parallel programming---');

//async - cycle control
var count = 0;
//define json array
var list = [
    {name:'Jack',age:20},
    {name:'Lucy',age:18},
    {name:'Jack',age:20},
    {name:'Lucy',age:18},
    {name:'Lucy',age:18}
];

async.whilst(
    function () {
        return count<5;
    },
    function (callback) {
        console.log(count);
        list[count].age += 1;
        count++;
        setTimeout(callback,1000);
    },
    function (err) {
        console.log(count);
        console.log(list);
    }
);

console.info();
console.info('---node.js async cycle programming---');

//queue(worker,concurrency), concurrency - task number limit
var q = async.queue(function (task,callback) {
    console.log('Worker is processing task:',task.name);
    callback();
},2);


q.push({name:'foo'},function (err) {
    console.log('finished processing foo');
});

q.push({name:'bar'},function (err) {
    console.log('finished processing bar');
});

q.push({name:'cap'},function (err) {
    console.log('finished processing cap');
});

q.push({name:'egg'},function (err) {
    console.log('finished processing egg');
});

q.push({name:'app'},function (err) {
    console.log('finished processing app');
});

q.empty = function(){
    console.log('no more tasks waiting');
}

q.drain = function(){
    console.log('all tasks have been processed');
}

console.info('---node.js async queue programming---');