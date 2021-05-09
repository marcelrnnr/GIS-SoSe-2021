namespace Aufgabe2_3 {

    //Aufgabe 3a)

document.body.style.backgroundColor = "yellowgreen";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.body.style.color = "white";
document.body.style.marginTop = "50px";
document.body.style.textAlign = "center";

let _h1: HTMLElement = document.createElement("h1");
_h1.textContent = "Deine Eiscreme";
_h1.style.color = "white";
_h1.style.height = "30px";
document.body.appendChild(_h1);

let _h2: HTMLElement = document.createElement("h2");
_h2.textContent = "Wähle einen Behälter aus";
_h2.style.backgroundColor = "black";
_h2.style.color = "white";
document.body.appendChild(_h2);

let _list: HTMLElement = document.createElement("div");
let _buttonid = document.createAttribute("id");
_buttonid.value = "buttons";
_list.setAttributeNode(_buttonid);
document.body.appendChild(_list);

let _button1: HTMLElement = document.createElement("button");
_button1.textContent = "Becher";
let _button1id = document.createAttribute("id");
_button1id.value = "button1";
_button1.setAttributeNode(_button1id);

let _buttonOptions = document.querySelector("#buttons");
_buttonOptions.appendChild(_button1);

let _bilder: HTMLElement = document.createElement("img");
let _bilderid = document.createAttribute("src");
_bilderid.value = "becher.png";
_bilder.setAttributeNode(_bilderid);
document.body.appendChild(_bilder);

let _button2: HTMLElement = document.createElement("button");
_button2.textContent = "Waffel";
let _button2id = document.createAttribute("id");
_button2id.value = "button2";
_button2.setAttributeNode(_button2id);

let _button2Options = document.querySelector("#buttons");
_buttonOptions.appendChild(_button2);

let _bilder2: HTMLElement = document.createElement("img");
let _bilder2id = document.createAttribute("src");
_bilder2id.value = "waffel.png";
_bilder2.setAttributeNode(_bilder2id);
document.body.appendChild(_bilder2);

let _button3: HTMLElement = document.createElement("button");
_button3.textContent = "Stiel";
let _button3id = document.createAttribute("id");
_button3id.value = "button3";
_button3.setAttributeNode(_button3id);

let _button3Options = document.querySelector("#buttons");
_button3Options.appendChild(_button3);

let _bilder3: HTMLElement = document.createElement("img");
let _bilder3id = document.createAttribute("src");
_bilder3id.value = "Stiel.png";
_bilder3.setAttributeNode(_bilder3id);
document.body.appendChild(_bilder3);
}











