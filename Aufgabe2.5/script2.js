"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    function createPartOptions(_part) {
        let div = document.createElement("div");
        div.style.maxWidth = "200px";
        let picture = document.createElement("img");
        picture.src = _part.bild;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_part.beschreibung);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", bilder);
        chooseButton.dataset.speicheralles = _part.beschreibung;
        chooseButton.dataset.speicheralleBilder = _part.bild;
        div.appendChild(chooseButton);
        return div;
    }
    function auswahl(_parts) {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            for (let i = 0; i < _parts.behaelter.length; i++) {
                let eiselemente = createPartOptions(_parts.behaelter[i]);
                document.body.appendChild(eiselemente);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i = 0; i < _parts.eiskugel.length; i++) {
                let eiselemente = createPartOptions(_parts.eiskugel[i]);
                document.body.appendChild(eiselemente);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i = 0; i < _parts.topping.length; i++) {
                let eiselemente = createPartOptions(_parts.topping[i]);
                document.body.appendChild(eiselemente);
            }
        }
    }
    function bilder(_input) {
        let output = _input.target;
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            localStorage.setItem("ausgewaehlterBehaelter", output.dataset.speicheralles);
            localStorage.setItem("ausgewaehlterBehaelterBild", output.dataset.speicheralleBilder);
            console.log(localStorage.getItem("ausgewaehlterBehaelter"));
            console.log(localStorage.getItem("ausgewaehlterBehaelterBild"));
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            localStorage.setItem("ausgewaehlteEiskugel", output.dataset.speicheralles);
            localStorage.setItem("ausgewaehltesEiskugelBild", output.dataset.speicheralleBilder);
            console.log(localStorage.getItem("ausgewaehlteEiskugel"));
            console.log(localStorage.getItem("ausgewaehltesEiskugelBild"));
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            localStorage.setItem("ausgewaehlteSosse", output.dataset.speicheralles);
            localStorage.setItem("ausgewaehlteSosseBild", output.dataset.speicheralleBilder);
            console.log(localStorage.getItem("ausgewaehlteSosse"));
            console.log(localStorage.getItem("ausgewaehlteSosseBild"));
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);
        let soßenBild = document.createElement("img");
        soßenBild.src = localStorage.getItem("ausgewaehlteSosseBild");
        soßenBild.style.width = "100%";
        div.appendChild(soßenBild);
        let kugelBild = document.createElement("img");
        kugelBild.src = localStorage.getItem("ausgewaehltesEiskugelBild");
        kugelBild.style.width = "100%";
        div.appendChild(kugelBild);
        let behaelterBild = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);
        let kugelBild = document.createElement("img");
        kugelBild.src = localStorage.getItem("ausgewaehltesEiskugelBild");
        kugelBild.style.width = "100%";
        div.appendChild(kugelBild);
        let behaelterBild = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);
        let behaelterBild = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }
    //2b)
    async function getData(_url) {
        let response = await fetch(_url);
        console.log("Response: ", response);
        let data = await response.json();
        auswahl(data);
    }
    getData("https://github.com/xCashio/GIS-SoSe-2021/blob/main/Aufgabe_2.5/data.json");
    //2c)
    /*
        async function sendData(_url: RequestInfo): Promise <void> {
            let query: URLSearchParams = new URLSearchParams (localStorage);
            console.log(query.toString());
            _url = _url + "?" + query.toString();
            let answer: Response = await fetch(_url);
    
    
        }
    sendData("http://gis-communication.herokuapp.com");
    */
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script2.js.map