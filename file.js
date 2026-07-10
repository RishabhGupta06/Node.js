const fs = require("fs");


// sync
// fs.writeFileSync("./test.txt","Hey their");


// Async
// fs.writeFile("./test.txt","Hey their",(err)=>{});

// sync it return 
// const read = fs.readFileSync("./contact.txt","utf-8");
// console.log(read);

// it do not return
// fs.readFile("./contact.txt","utf-8",(err, res) =>{
//     if(err) console.log("error",err);
//     else console.log(res);
// });


    fs.appendFileSync("./test.txt",`hey\n`);

