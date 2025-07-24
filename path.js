const path = require("path");
console.log(path.dirname(__filename));
console.log(path.extname("myfile.txt"));

const moment = require("moment");
console.log(moment().format("DD-MM-YYYY HH:mm"));
console.log(moment().add(7,"days").format("DD-MM-YYYY HH:mm"));
console.log(moment().format("dddd"));
console.log(moment());

const fs = require("fs");
let mydata ="Hello mca - z1 class";
fs.writeFile("test.txt",mydata,function(err){
    if (err) throw err;
    console.log("file saved successfully");
});

fs.readFile("test.txt","utf8",function (err,data){
     if (err) throw err;
     console.log("file content: ",data);
})










