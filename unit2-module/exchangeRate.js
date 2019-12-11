console.info("\n");
console.info("------calculate exchange rate-------");
console.info("\n");

var exRate = require('./exchangeCal.js');//import own js file
var readline=require("readline");
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("please enter count:",function (iMoney) {
    console.info(iMoney+' US-Dollar exchange to RMB equals '+exRate.dolToNyc(iMoney));
    console.info(iMoney+' RMB exchange to US-Dollar equals '+exRate.nycToDol(iMoney));
    console.info("\n");
    rl.close();
})