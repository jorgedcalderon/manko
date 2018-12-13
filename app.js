'use strict';
var express = require("express"),
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// // app.use(express.static(__dirname + "/public"));

// We’re setting up an extremely simple server here.
const http = require('http');

// These could (should) be set as env vars.
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

app.get("*", function(req, res){
    res.send("MILAGRO ");
});

// No matter what hits the server, we send the same thing.
http.createServer(app).listen(port, host);

// This message prints in the console when the app starts.
console.log(`App running at http://${host}:${port}`);


// // imports
// var express = require('express');
// var request = require('request');
// var http = require('http');
// var https = require('https');
// var staticServe = require('serve-static');
// var fs = require('fs');
// var bodyParser = require('body-parser');
// var xml2json = require('xml2json');

// // server
// var app = express();

// app.use(bodyParser.json()); // used for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }));     // for parsing application/x-www-form-unlencoded

// // Used for setting up your static site
// app.set("view engine", "ejs");
// // app.use(express.static(__dirname + "/public"));
// app.use(staticServe('_domain', {'index': ['index.html', 'index.html']}));

// // Read the link below about express behind a proxy
// app.set('trust proxy', true);
// app.set('trust proxy', 'loopback');

// const options = {
//   key: fs.readFileSync("/root/manko.app.key"),
//   cert: fs.readFileSync("/root/manko.app.crt")
// };

// app.get("*", function(req, res){
//     res.send("PAGINA CHIDA *");
// });

// http.createServer(app).listen(process.env.PORT || 8000);
// https.createServer(options, app).listen(process.env.PORT || 8443);



// const https = require("https"),
//   fs = require("fs"),
//   express = require("express");

// const options = {
//   key: fs.readFileSync("/root/manko.app.key"),
//   cert: fs.readFileSync("/root/manko.app.crt")
// };

// const app = express();

// app.use((req, res) => {
//   res.writeHead(200);
//   res.end("hello world\n");
// });

// app.listen(8000);

// https.createServer(options, app).listen(8080);


// const https = require('https'),
// fs = require("fs");
// var express = require("express"),
// app = express();


// const options = {
//   key: fs.readFileSync('../manko.app.chained.key', 'utf8'),
//   cert: fs.readFileSync('../manko.app.crt', 'utf8')
// };


// const hostname = 'localhost';
// const port = 8080;

// app.get("*", function(req, res){
//     res.send("PAGINA CHIDA");
// });



// const server = https.createServer(options, app);

// server.listen(port, hostname, () => {
//   console.log(`Server MAnko running at http://${hostname}:${port}/`);
// });

//app server
// app.listen(8000);
// https.createServer(options, app).listen(8080);

// const now = new Date();
// console.log(now);
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var port = process.env.PORT || "8080";
// var ip = process.env.IP || "178.128.6.66";


// //app config
// var data = require("./data");
// var api_key = data.mailKey;
// var domain =  data.mailUser;
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({extended: true}));
// //app config


// //app routes
// app.get("/", function(req, res){
//     res.render("index");
// });

// app.get("/es", function(req, res){
//     res.render("landing-es");
// });



// app.listen(port, ip, function(){
//     console.log("Servidor del mundo de los espiritus inicado");
// });







//----------------------------
//https:
// const https = require("https"),
//   fs = require("fs");
  
// const options = {
//   key: fs.readFileSync('../manko.app.key', 'utf8'),
//   cert: fs.readFileSync('../manko.app.crt', 'utf8')
// };

//app routes

//app server
// app.listen(8000);
// https.createServer(options, app).listen(8080);
//----------------------------










// var https = require('https');
// var fs = require('fs');

// var privateKey  = fs.readFileSync('../manko.app.key', 'utf8');
// var certificate = fs.readFileSync('../manko.app.chained.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};



// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var port = process.env.PORT || "3443";
// app.set('port', port);
// //var ip = process.env.IP || "178.128.6.66";
// var data = require("./data");
// //console.log(data);

// var api_key = data.mailKey;
// var domain =  data.mailUser;
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({extended: true}));


// app.get("/", function(req, res){
//     res.render("index");
// });

// // app.get("/en", function(req, res){
// //     res.render("landing-en");
// // });

// app.get("/es", function(req, res){
//     res.render("landing-es");
// });

// // app.get("/pago_exitoso", function(req, res){
// //     res.render("pago-exitoso");
// // });

// // app.get("/pago_en_proceso", function(req, res){
// //     res.render("pago-en-proceso");
// // });

// app.get("/client_info", function(req, res){
//     res.render("client-info");
// });

// app.post("/client_info", function(req, res){
//     var name = req.body.name;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     console.log(email + name + phone);
    
//     var mailData = {
//           from: 'Registros de Manko <servidor@manko.app>',
//           to: 'hola@manko.app',
//           subject: 'Registro en Manko.app',
//           text: 'Un nuevo registro: \n\n' +
//           name + '\n\n' + email + '\n\n' + phone +
//           '\n'
//         };
        
//         mailgun.messages().send(mailData, function (error, body) {
//           console.log(body);
//         });
    
//     res.render("client-info");
// });

// app.get("*", function(req, res){
//     res.render("index");
// });

// // app.listen(port, ip, function(){
// //     console.log("Portal al Mundo de los Espíritus abierto");
// // });


  

// var httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port);