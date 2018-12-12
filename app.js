//inicio
const https = require("https"),
  fs = require("fs"),
  express = require("express");
  
const options = {
  key: fs.readFileSync('../manko.app.key', 'utf8'),
  cert: fs.readFileSync('../manko.app.crt', 'utf8')
};

const app = express();

//app config
var bodyParser = require("body-parser");
var data = require("./data");
var api_key = data.mailKey;
var domain =  data.mailUser;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
//app config


//app routes
app.get("/", function(req, res){
    res.send("TESTING LANDING PAGE");
});

// app.get("/es", function(req, res){
//     res.render("landing-es");
// });

//app routes
app.listen(8000);

https.createServer(options, app).listen(8080);


















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