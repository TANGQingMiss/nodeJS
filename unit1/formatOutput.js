//format string output
console.log("%s","This is a format string program");//simple output
console.log("%s %s %s","you can","connect","several strings");//connect several string
console.log("%s","you can","connect","several strings");//the same as above
console.log("%s-%s","object","string");
console.log("%s:%s","object","string");

//format of data
console.log(8+0.8);
console.log("%d",8*8);

//format of json
var v_json={
    OS:"Windows",
    Version:"7.1",
    Language:["English","Chinese"]
};

console.log("%j",v_json);

//output operator
console.log(0==1);