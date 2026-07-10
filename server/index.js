const http =  require("http");
const fs = require("fs");

const myserver = http.createServer((req,res) => {
    let now = new Date();
    const log = `A user refreshed the page at ${req.url} ${now.toString()}\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/': res.end("Homepage");
            break;
            case '/about': res.end("This side Rishabh Gupta");
            break;
            default: 
                res.end("404 Not found");
        }
    });
});


myserver.listen(8000,()=> console.log("Server is working "));