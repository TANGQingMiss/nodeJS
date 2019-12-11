//calculate factorial by readline module
console.info("\n");
console.info("-----calculate factorial------");
console.info("\n");

var iNum;
var iFactorial = 1;
var strFactorial;

var readline=require("unit1/readLine");
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Please input initial value:\nn=",function (iNum) {
    strFactorial = iNum+"!="+factorial(iNum);
    console.info(strFactorial);
    console.info("\n");
    rl.close();
});8

function factorial(n) {
    if(n>0){
        if(n==1) iFactorial=1;
        else iFactorial=n*factorial(n-1);
    }
    return iFactorial;
}