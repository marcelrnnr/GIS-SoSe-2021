"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
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
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key]);
                }
            }
            if (path == "/json") {
                let sentObject = JSON.stringify(url.query);
                console.log(sentObject);
                _response.write(sentObject);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=script.js.map