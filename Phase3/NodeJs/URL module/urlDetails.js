let url = require("url");
let urlDetails = "http://localhost:9090/simpleWebApp?name=jacques&age=21";
console.log(urlDetails);

let urlRef = url.parse(urlDetails, true);
console.log(urlRef);
console.log("Protocol: " + urlRef.protocol);
console.log("port number: "+ urlRef.port);
console.log("host name: " + urlRef.hostname);
console.log("path name: "+ urlRef.pathname);
let queryInfo = urlRef.query;
console.log(queryInfo);
console.log(queryInfo.name);
console.log(queryInfo.age);
