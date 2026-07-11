const http =  require("http");
const fs = require("fs");

function handler(req,res){
    if(req.url === "/favicon.ico") return res.end();
    let now = new Date();


    const myUrl = url.parse(req.url, true); // we using parsing to make url object if we write true;


    console.log(myUrl);

    const log = `A user refreshed the page at ${req.url} ${now.toString()}\n`; // in this we are storing in log file


    // now 
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case '/': res.end("Homepage");
            break;
            case '/about': 
            const qp = myUrl.query.name;
              res.end(`This side ${qp}`); // displaying output in browser
            break;
            default: 
                res.end("404 Not found");
        }
    });

}
const myserver = http.createServer(handler);


myserver.listen(8000,()=> console.log("Server is working "));