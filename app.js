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

app.get("/entra-al-mundo-de-los-espiritus", function(req, res){
    res.render("entraAlMundo");
});

app.get("/manko-y-el-mundo-de-los-espiritus", function(req, res){
    res.render("libroManko");
});

// app.get("/pago_exitoso", function(req, res){
//     res.render("pago-exitoso");
// });

// app.get("/pago_en_proceso", function(req, res){
//     res.render("pago-en-proceso");
// });

app.get("/client_info", function(req, res){
    res.render("client-info");
});

app.post("/client_info", function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    console.log(email + name + phone);
    
    var mailData = {
          from: 'libro comprado Manko clave <servidor@manko.app>',
          to: 'hola@manko.app',
          subject: 'Registro en MANKO',
          text: 'Un nuevo registro: \n\n' +
          name + '\n\n' + email + '\n\n' + phone +
          '\n'
        };
        
        mailgun.messages().send(mailData, function (error, body) {
          console.log(body);
        });
    
    res.render("client-info");
});

app.get("/libroComprado", function(req, res){
    res.render("libroComprado");
});

app.post("/libroComprado", function(req, res){
    var clave= req.body.clave;
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    //console.log(email + name + phone + clave);
    
    var mailData = {
          from: 'El Mundo de los Espíritus <servidor@manko.app>',
          to: 'hola@manko.app',
          subject: 'Registro en MANKO',
          text: 'Un nuevo registro: \n\n' +
          name + '\n\n' + email + '\n\n' + phone +
          '\n'
        };
        
        mailgun.messages().send(mailData, function (error, body) {
          console.log(body);
        });
        
        var mail2Data = {
          from: 'El Mundo de los Espíritus <hola@manko.app>',
          to: email,
          subject: name + ', entra al Mundo de los Espíritus',
          text: name + ' así que quieres entrar al Mundo de los Espíritus... \n\n Bueno, si así lo quieres, así será... \n Espera grandes cambios y señales sutiles...'
        };
        
        mailgun.messages().send(mail2Data, function (error, body) {
          console.log(body);
        });
    
    res.render("libroComprado");
});

app.get("*", function(req, res){
    res.render("index");
});

app.listen(port, ip, function(){
    console.log("Manko y el mundo de los espiritus, servidor iniciado");
});
