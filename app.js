var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || "8000";
var ip = process.env.IP || 'localhost';
var data = require("./data");


var api_key = data.mailKey;
var domain =  data.mailUser;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/en", function(req, res){
    res.render("landing-en");
});

app.get("/es", function(req, res){
    res.render("landing-es");
});

app.get("/pago_exitoso", function(req, res){
    res.render("pago-exitoso");
});

app.get("/pago_en_proceso", function(req, res){
    res.render("pago-en-proceso");
});

app.get("/client_info", function(req, res){
    res.render("client-info");
});

app.post("/client_info", function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    console.log(email + name + phone);
    
    var mailData = {
          from: 'Registros de Temazcal <servidor@temazcal.info>',
          to: 'hola@temazcal.info',
          subject: 'Registro en temazcal.info',
          text: 'Un nuevo registro: \n\n' +
          name + '\n\n' + email + '\n\n' + phone +
          '\n'
        };
        
        mailgun.messages().send(mailData, function (error, body) {
          console.log(body);
        });
    
    res.render("client-info");
});

app.get("*", function(req, res){
    res.render("index");
});

app.listen(port, ip, function(){
    console.log("Servidor de temazcal inicado");
});


// 'use strict';
// var express = require("express"),
// app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));
// app.set("view engine", "ejs");
// //http
// const http = require('http');

// var data = require("./data");
// var api_key = data.mailKey;
// var domain =  data.mailUser;
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

// // These could (should) be set as env vars.
// const port = process.env.PORT || 8000;
// const host = process.env.HOST || 'localhost';

// //---------rutas
// app.get("/", function(req, res){
//     res.render("index");
// });

// app.get("/es", function(req, res){
//     res.render("landing-es");
// });

// app.get("*", function(req, res){
//     res.send("¡412!¡Tenemos un 412! ");
// });

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

// //----------------rutas

// http.createServer(app).listen(port, host);
// console.log('Mundo de los espíritus corriendo en http://${host}:${port}');

