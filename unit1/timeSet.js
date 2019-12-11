var n = 0;
console.time('10000times');
for(var i = 0;i<10000;i++){
    for (var j=0;j<10000;j++){
        n++;
    }
}
console.timeEnd('10000times');
console.info(n);
//we use the function console.time() and console.timeEnd() to record time change