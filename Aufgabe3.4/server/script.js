"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let port = Number(process.env.PORT); //Erstelle Variable Port um auf den Server zu gelangen
    if (!port)
        port = 8100; //gebe dem Port die Nummer 8100 
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer(); //erstellt einen Server
        console.log("Starting server" + _port);
        server.addListener("request", handleRequest); //Eventlistener für Anfragen und ListenerFunktionen
        server.listen(port);
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
let databaseURL = "mongodb+srv://Marcelrnnr:123ich@gissose21.prtdo.mongodb.net/letzteAbgabe?retryWrites=true&w=majority";
async function handleRequest(_request, _response) {
    console.log("I hear voices!");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    if (_request.url) {
        let url = Url.parse(_request.url, true);
        let path = url.pathname;
        let input = { name: url.query.name + " ", email: url.query.email + " ", betreff: url.query.betreff + " " };
        if (path == "/sendData") {
            let data = await sendDatabaseData(databaseURL, input);
            _response.write(data);
        }
        else if (path == "/getData") {
            let data = await getDatabaseData(databaseURL);
            _response.write(JSON.stringify(data));
            console.log(data);
        }
    }
    _response.end();
}
async function getDatabaseData(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let orders = mongoClient.db("letzeAbgabe").collection("Daten");
    console.log("Database connection", orders != undefined);
    let cursor = orders.find();
    let data = await cursor.toArray();
    return data;
}
async function sendDatabaseData(_url, _formData) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let orders = mongoClient.db("letzeAbgabe").collection("Daten");
    orders.insertOne(_formData);
    let answer = "dieAntwort";
    return answer;
}
//# sourceMappingURL=script.js.map