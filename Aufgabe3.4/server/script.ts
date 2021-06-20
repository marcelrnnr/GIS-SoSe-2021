import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    let port: number = Number(process.env.PORT);                    //Erstelle Variable Port um auf den Server zu gelangen
    if (!port)
        port = 8100;                                                //gebe dem Port die Nummer 8100 
    startServer(port);
    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();              //erstellt einen Server
        console.log("Starting server" + _port);
        server.addListener("request", handleRequest);                   //Eventlistener für Anfragen und ListenerFunktionen
        server.listen(port);
    }
}

let databaseURL: string = "mongodb+srv://Marcelrnnr:123ich@gissose21.prtdo.mongodb.net/letzteAbgabe?retryWrites=true&w=majority";

async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {          //Funktion Request um den Zugriff zu erlauben und die URL zurückgibt.
    console.log("I hear voices!");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let path: string = <string>url.pathname;
        let input: Data = { name: url.query.name + " ", email: url.query.email + " ", betreff: url.query.betreff + " " };
        if (path == "/sendData") {
            let data: string = await sendDatabaseData(databaseURL, input);
            _response.write(data);
        }
        else if (path == "/getData") {
            let data: Data[] = await getDatabaseData(databaseURL);
            _response.write(JSON.stringify(data));
            console.log(data);
            
        }
    }
    _response.end();
}
interface Data {
    name: string;
    email: string;
    betreff: string;
}
async function getDatabaseData(_url: string): Promise<Data[]> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let orders: Mongo.Collection = mongoClient.db("letzeAbgabe").collection("Daten");
    console.log("Database connection", orders != undefined);
    let cursor: Mongo.Cursor = orders.find();
    let data: Data[] = await cursor.toArray();
    return data;
}
async function sendDatabaseData(_url: string, _formData: Data): Promise<string> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let orders: Mongo.Collection = mongoClient.db("letzeAbgabe").collection("Daten");
    orders.insertOne(_formData);
    let answer: string = "dieAntwort";
    return answer;
}