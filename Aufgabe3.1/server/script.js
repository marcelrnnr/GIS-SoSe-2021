"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //Erstelle Variable Port um auf den Server zu gelangen
    if (!port)
        port = 8100; //gebe dem Port die Nummer 8100 
    let server = Http.createServer(); //erstellt einen Server
    server.addListener("request", handleRequest); //Eventlistener für Anfragen und ListenerFunktionen
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map