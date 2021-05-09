
//**Aufgabe 1 */

namespace Aufgabe2_3 {

    let addRecButton: HTMLElement = document.createElement("Button");
    let textRecButton: Text = document.createTextNode("Rechtecke hinzufügen");
    addRecButton.appendChild(textRecButton);
    document.body.appendChild(addRecButton);
    addRecButton.id = "RecButtId";

    let resetWindowButton: HTMLElement = document.createElement("Button");
    let textWinButton: Text = document.createTextNode("Rechtecke zurücksetzen");
    resetWindowButton.id = "resetButtId";

    resetWindowButton.appendChild(textWinButton);
    document.body.appendChild(resetWindowButton);

    document.getElementById("RecButtId").addEventListener("click", createDivRec);
    document.getElementById("resetButtId").addEventListener("click", resetWindow);

    function resetWindow(): void {                                                                  //setzt die Seite zurück
        window.location.reload();
    }

    function createDivRec(): void {                                                             //fügt ein weiteres Rechteck hinzu

        let colors: String[] = ["blue", "red", "yellow", "purple", "green", "black", "grey"];
        let previousElement: HTMLElement = document.body;
        let div: HTMLDivElement = document.createElement("div");

        div.style.height = (50 + Math.floor(Math.random() * 451)).toString() + "px";
        div.style.width = (50 + Math.floor(Math.random() * 451)).toString() + "px";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)].toString();
        div.style.position = "absolute";
        div.style.left = (50 + Math.floor(Math.random() * 451)).toString() + "px";
        div.style.right = (50 + Math.floor(Math.random() * 451)).toString() + "px";
        div.classList.add("rectangle");
        previousElement.appendChild(div);
        previousElement = div;

    }
}

//**Aufgabe 2 */
//**a) */





