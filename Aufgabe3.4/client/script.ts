namespace P_3_4Client {
    let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: RequestInfo = "https://gissoseapp.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        console.log(answer);   
    }
    async function getData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let _url: RequestInfo = "https://gissoseapp.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerHTML = output;
    }
    document.getElementById("button1").addEventListener("click", sendData);
    document.getElementById("button2").addEventListener("click", getData);
}