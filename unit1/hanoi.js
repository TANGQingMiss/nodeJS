//this js file is to solve the classic hanoi problem with algorithm
var iCount = 0; //number of movements
var strMoveStep="";//move steps
var readline=require("unit1/readLine");
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Please input hanoi plates number:\t",function (count) {
    console.log("The hanoi plate number is: \t",count);
    hanoi(count,"A","B","C");
    console.log("Move steps are as following:\t%s",strMoveStep);
    console.info("move number is:\t%s",iCount);
    rl.close();
});

function move(x,y) {
    iCount++;
    strMoveStep+=x+"->"+y+"\t";
}

function hanoi(m,a,b,c) {
    if(m==1){
        move(a,c);
    }
    else{
        hanoi(m-1,a,c,b);
        move(a,c);
        hanoi(m-1,b,a,c);
    }
}