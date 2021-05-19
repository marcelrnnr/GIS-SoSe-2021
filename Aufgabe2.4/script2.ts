

namespace Aufgabe2_4 {

    let alleEisTeileObj: Eiscreme = JSON.parse(alleBehaelter);
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
        chooseButton.addEventListener("click", bilder);
        chooseButton.dataset.speicheralles = _part.beschreibung;
        chooseButton.dataset.speicheralleBilder = _part.bild;
        div.appendChild(chooseButton);
        return div;
        
    }


    if (document.querySelector("title").getAttribute("id") == "seite1") {
        for (let i: number = 0; i < alleEisTeileObj.behaelter.length; i++) {
            let eiselemente: HTMLElement = createPartOptions(alleEisTeileObj.behaelter[i]);
            document.body.appendChild(eiselemente);
            
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i: number = 0; i < alleEisTeileObj.eiskugel.length; i++) {
            let eiselemente: HTMLElement = createPartOptions(alleEisTeileObj.eiskugel[i]);
            document.body.appendChild(eiselemente);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i: number = 0; i < alleEisTeileObj.topping.length; i++) {
            let eiselemente: HTMLElement = createPartOptions(alleEisTeileObj.topping[i]);
            document.body.appendChild(eiselemente);
        }
    }


    function bilder(_input: MouseEvent): void {
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

}






