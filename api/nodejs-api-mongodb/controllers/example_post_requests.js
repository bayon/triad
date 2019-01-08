//node js REQUEST
var request = require("request");

var options = { method: 'POST',
  url: 'http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/',
  headers: 
   { 'Postman-Token': 'ffb2f8d6-a960-4eb8-893e-8b45f921800b',
     'cache-control': 'no-cache',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: { item: 'snap', undefined: undefined } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


// NODEJS NATIVE 
var qs = require("querystring");
var http = require("http");

var options = {
  "method": "POST",
  "hostname": [
    "ec2-3-85-215-230",
    "compute-1",
    "amazonaws",
    "com"
  ],
  "port": "3000",
  "path": [
    "api",
    "todo",
    ""
  ],
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "Postman-Token": "f64a3bd7-1095-48a6-a524-779d5110bfc0"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ item: 'snap', undefined: undefined }));
req.end();
//////////////