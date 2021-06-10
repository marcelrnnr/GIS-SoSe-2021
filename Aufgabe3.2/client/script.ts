namespace P_3_2Server {
    let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
    async function sendDataHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: RequestInfo = "https://gissoseapp.herokuapp.com";
        _url += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerHTML = output;
    }

    async function sendDataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let _url: RequestInfo = "https://gissoseapp.herokuapp.com";
        _url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: JsonAnswer = await answer.json();
        console.log(output);

    }
    document.getElementById("htmlbutton").addEventListener("click", sendDataHTML);
    document.getElementById("jsonbutton").addEventListener("click", sendDataJSON);
    

    
    interface JsonAnswer {
        name: string;
        email: string;
        betreff: string;
    } 
}