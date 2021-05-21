

namespace Aufgabe2_5 {


    export interface EisPart {
        beschreibung: string;
        bild: string;
    }
    export interface Eiscreme {
        behaelter: EisPart[];
        eiskugel: EisPart[];
        topping: EisPart[];
    }
    export interface Answer {
        [key: string]: string;
    }



    function createPartOptions(_part: EisPart): HTMLElement {
        let div: HTMLElement = document.createElement("div");
        div.style.maxWidth = "200px";
        let picture: HTMLImageElement = document.createElement("img");
        picture.src = _part.bild;
        picture.style.width = "100%";
        div.appendChild(picture);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.beschreibung);
        chooseButton.appendChild(textChooseButton);
        chooseButton.addEventListener("click", saveSelection);
        chooseButton.dataset.speicheralles = _part.beschreibung;
        chooseButton.dataset.speicheralleBilder = _part.bild;
        div.appendChild(chooseButton);
        return div;

    }


    function auswahl(_parts: Eiscreme): void {

        if (document.querySelector("title").getAttribute("id") == "seite1") {
            for (let i: number = 0; i < _parts.behaelter.length; i++) {
                let eiselemente: HTMLElement = createPartOptions(_parts.behaelter[i]);
                document.body.appendChild(eiselemente);

            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i: number = 0; i < _parts.eiskugel.length; i++) {
                let eiselemente: HTMLElement = createPartOptions(_parts.eiskugel[i]);
                document.body.appendChild(eiselemente);
            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i: number = 0; i < _parts.topping.length; i++) {
                let eiselemente: HTMLElement = createPartOptions(_parts.topping[i]);
                document.body.appendChild(eiselemente);
            }
        }
    }


    function saveSelection(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;
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
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);
        let soßenBild: HTMLImageElement = document.createElement("img");
        soßenBild.src = localStorage.getItem("ausgewaehlteSosseBild");
        soßenBild.style.width = "100%";
        div.appendChild(soßenBild);

        let kugelBild: HTMLImageElement = document.createElement("img");
        kugelBild.src = localStorage.getItem("ausgewaehltesEiskugelBild");
        kugelBild.style.width = "100%";
        div.appendChild(kugelBild);

        let behaelterBild: HTMLImageElement = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);

        let kugelBild: HTMLImageElement = document.createElement("img");
        kugelBild.src = localStorage.getItem("ausgewaehltesEiskugelBild");
        kugelBild.style.width = "100%";
        div.appendChild(kugelBild);

        let behaelterBild: HTMLImageElement = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "300px";
        document.body.appendChild(div);

        let behaelterBild: HTMLImageElement = document.createElement("img");
        behaelterBild.src = localStorage.getItem("ausgewaehlterBehaelterBild");
        behaelterBild.style.width = "100%";
        div.appendChild(behaelterBild);
    }



    //2b)

    async function getData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response: ", response);
        let data: Eiscreme = await response.json();
        auswahl(data);
    }

    getData("https://marcelrnnr.github.io/GIS-SoSe-2021/Aufgabe2.5/data.json");

    //2c)

    async function sendData(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        console.log(query.toString());
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: Answer = await answer.json();
        let displayResponse: HTMLDivElement = <HTMLParagraphElement>document.getElementById("3c");
        if (output.error) {
            displayResponse.className = "Error";
            displayResponse.innerText = output.error;
        }
        else {
            displayResponse.className = "Message";
            displayResponse.innerText = output.Message;
        }
    }
    sendData("https://gis-communication.herokuapp.com");

}






