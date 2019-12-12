//define buffer onject
var buffer16 = new Buffer([0x6e,0x6f,0x64,0x65,0x6a,0x73]);
console.log("The variable buffer16's length is:"+buffer16.length+".");
console.log("The variable buffer16 is"+buffer16+".");
//use index to read buffer object
for (var i=0;i<buffer16.length;i++){
    console.log("buffer16["+i+"] is "+buffer16[i]);
    console.log("buffer16["+i+"].toString is "+buffer16[i].toString());
}

console.log(buffer16.toString('utf8'));//encoding utf8
console.log(buffer16.toString('hex'));//encoding hex

//define and initialize buffer object in utf8
var bufferUTF8 = new Buffer('nodejs','utf8');
console.log("The variable bufferUTF8's length is "+bufferUTF8.length+".");
console.log("The variable bufferUTF8 is "+bufferUTF8+".");
for (var i=0;i<bufferUTF8.length;i++){
    console.log("bufferUTF8["+i+"] is "+bufferUTF8[i]);
    console.log("bufferUTF8["+i+"].toString is "+bufferUTF8[i].toString());
}

console.log(bufferUTF8.toString('utf8'));//encoding utf8
console.log(bufferUTF8.toString('hex'));//encoding hex

//verify a buffer object
if(Buffer.isBuffer(bufferUTF8)){
    console.log("The bufferUTF8 is a buffer object");
}
else{
    console.log("The bufferUTF8 isn't a buffer object");
}

//buffer object to string
buf = new Buffer(26);
for(var i = 0;i<26;i++){
    buf[i] = i + 97;
}

console.info("buf.toString('ascii'):"+buf.toString('ascii'));
console.info();
console.info("buf.toString('utf8',0,8):"+buf.toString('utf8',0,8));

//buffer slice
var buf_slice = buf.slice(0,4);
console.log(buf_slice);
//buffer copy
//buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd])

//buffer concat
//var s = Buffer.concat(list,length).toString();



