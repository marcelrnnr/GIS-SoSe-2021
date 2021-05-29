import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);                    //Erstelle Variable Port um auf den Server zu gelangen
    if (!port)
        port = 8100;                                                //gebe dem Port die Nummer 8100 

    let server: Http.Server = Http.createServer();                  //erstellt einen Server
    server.addListener("request", handleRequest);                   //Eventlistener für Anfragen und ListenerFunktionen
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {                                 //Funktion handleListen
        console.log("Listening");                                   //Konsolenausgabe
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {          //Funktion Request um den Zugriff zu erlauben und die URL zurückgibt.
        console.log("I hear voices!");
        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
}