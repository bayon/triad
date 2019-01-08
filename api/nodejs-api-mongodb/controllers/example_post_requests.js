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
//jQuery Ajax
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "Postman-Token": "894f5e68-af83-4b24-bb93-fab33d21dcd5"
    },
    "data": {
      "item": "snap"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//// javascript XHR
var data = "item=snap&undefined=";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://ec2-3-85-215-230.compute-1.amazonaws.com:3000/api/todo/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "1cff5473-c318-4beb-99ee-f63f936c4cdc");

xhr.send(data);