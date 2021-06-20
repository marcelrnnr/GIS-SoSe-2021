"use strict";
var P_3_4Client;
(function (P_3_4Client) {
    let displayResponse = document.getElementById("answer");
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissoseapp.herokuapp.com";
        _url += "/sendData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        console.log(answer);
    }
    async function getData() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissoseapp.herokuapp.com";
        _url += "/getData";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.text();
        displayResponse.innerHTML = output;
    }
    document.getElementById("button1").addEventListener("click", sendData);
    document.getElementById("button2").addEventListener("click", getData);
})(P_3_4Client || (P_3_4Client = {}));
//# sourceMappingURL=script.js.map