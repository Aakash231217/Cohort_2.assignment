let a=1;
console.log(a);
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
});
console.log("done");