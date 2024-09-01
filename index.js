const http = require("http");
const fs = require("fs");
const url = require('url')

// const myServer = http.createServer((req, res) => {
//     console.log('new request recive')
//     console.log(req.headers)
//     res.end('hello from server')
// });

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url} ${req.method} : New Req Recevied\n`;
  const  myUrl = url.parse(req.url)
  console.log(myUrl)
  fs.appendFile("text.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end(`Hi My name is Rizwan I am learning node js`);
        break;
      case "/contact-us":
        res.end("+91 1234567890");

      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server is runnig on 8000 port");
});
