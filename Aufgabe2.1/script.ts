/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();


function func2(): void {
    console.log("Gute!");
}

function func1(): void {
    console.log("Klar?");
} 

/*
(K) Aufgabe 1 a)
 Variablennamen sind fast frei wählbar. Es dürfen ausschließlich Ziffern (0-9), Buchstaben(a-z, A-Z), sowie Unterstrich und $ vorkommen.
 Der Name darf außerdem nicht mit einer Ziffer beginnen und darf keine Leerzeichen oder Bindestriche enthalten.

(K) b)
 Zuerst wird durch Zeile 3 "Alles" in der Konsole ausgegeben.
 Dann springt er durch den Methodenaufruf in Zeile 4 zur Zeile 11 und gibt klar?" aus.
 Anschließend springt er wieder nach oben in Zeile 5 und gibt "Logo!" in der Konsole aus.
 (nach der Aufgabe c haben sich die Zeilen verändert.)
*/


/*
(K) Aufgabe 2
Es wird von 9 bei jedem Schleifendurchlauf 1 herunter gezählt.
Durch die While Schleife wird bestimmt das dieser Vorgang solange ausgeführt/wiederholt wird, bis die Zahl gerade noch größer als 0 ist. Also bis 1.
Es sollte in der Konsole folgendes ausgegeben werden:
9, 8, 7, 6, 5, 4, 3, 2, 1

*/
/*
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();


/* Aufgabe 3 
VS gibt sofort an wenn es einen Fehler gibt. Durch unterstrichenen Code passt etwas nicht und man kann durch das Lämpchen überprüfen was nicht passt. Schlägt Verbesserungen vor.
*/


/* Aufgabe 4 a)

Es wird zuerst Hallo in der Konsole ausgegeben durch das console.log(x) in Zeile 97. 
Anschließend springt er durch den Funktionsaufruf nach unten in Zeile 104 und dort wird intern in Funktion die Variable x durch y überschrieben.
Dadurch wird lokal in Zeile 106 Bla in der Konsole ausgegeben.
Nach der Funktion geht es oben in Zeile 99 weiter mit der selben Konsolenausgabe wie bereits in Z 73 "Hallo".
Funktion 2 wird zunächst durchlaufen. Dort bekommt die variable x den Wert "Blubb" zugewiesen und wird in der konsole ausgegeben.
Dann geht es durch den obigen Funktionsaufruf wieder in die Funktion, func3() in diesem Fall. Dort gibt es diesmal keine direkte Konsolenausgabe aus der Funktion,
sondern das x wird mit dem Wert "Test" überschrieben. 
Dann wird bei den Funktionsaufrufen wieder eine Zeile runtergesprungen (Z. 102) und bei dieser Konsolenausgabe der neue Wert "Test" ausgegeben.

Konsolenausgabe:

Hallo
Bla
Hallo
Blubb
Test

b)

Die globalen Variablen befinden sich außerhalb von Funktionen und sind im gesamten Code bekannt und dürfen nicht mit let, const, var vereinbart werden.
Lokale Variablen dagegen definiert man in einer Funktion. Sie sind nicht mit anderen variablen des gleichen Namens verbunden, die außerhalb der Funktion benutzt werden.
Bei Übergabeparametern werden die Werte an eine Funktion übergeben. Und von dort aus wird dann eine Kopie des Parameters benutzt um zu arbeiten.

Unterschied normale Variablen und Funktionen:
Funktionen enthalten Codeblöcke und Variablen speichern Werte ab

Gemeinsamkeit normale Variablen und Funktionen:
Sie sind beide unter einem Namen gespeichert und haben einen Typen.
*/




/*
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}
*/

/*Aufgabe 5 a + b*/

let number1: number = 8;
let number2: number = 2;
/*
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(number1, number2));
*/
/*
function max(a: number, b: number) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(max(number1, number2));
*/
/**c */

function summe(): void {
    let i: number = 100;
    let sum: number = 0;
    while (i > 0) {
        sum += i;
        i--;
    }
    console.log(sum);
}
summe();

/**d) */
function randomNums(): void {

    for (let i: number = 0; i < 10; i++) {
        console.log(Math.random() * 101));
    }
}
randomNums();

/**e) */
function factorial(fax: number): number {
    let factor: number = 1;
    let result: number = 1;

    do {
        result = result * factor;
        factor++;
    }
    while (factor < fac + 1);
    return result;

}

console.log(factorial(number1));

/**f) */

let jahr1: number = 1900;
let jahr2: number = 2021;

function leapyear(start: number, ende: number): void {
    for (let i: number = start; i < ende + 1; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
leapyear(jahr1, jahr2);




/* 6 a)*/
/*
    let hash: string = "";

    for (let i: number = 0; i < 7; i++) {
        hash = hash + "#";
        console.log(hash);
    }

    /* b) */
/*
    for (let i: number = 0; i < 101; i++) {
        if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i);
        }
    }

    //* c) */
/*
    for (let i: number = 0; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }

    /**d) */
/*
    let schwarzeFelder: string = "#";
    let weißeFelder: string = " ";
    let schachbrett: string = "";

    for (let i: number = 0; i < 8; i++) {
        if (i % 2 == 0) {
            for (let i: number = 0; i < 4; i++) {
                schachbrett += weißeFelder;
                schachbrett += schwarzeFelder;
            }
            schachbrett += "/n";

        }

        else {
            for (let i: number = 0; i < 4; i++) {
                schachbrett += weißeFelder;
                schachbrett += schwarzeFelder;
            }
            schachbrett += "/n";
        }
    }
    console.log(schachbrett);

    //**e) */

function brett(brettlaenge: number): void {
    for (let i: number = 0; i < brettlaenge; i++) {
        if (i % 2 == 0) {
            for (let i: number = 0; i < brettlaenge / 2; i++) {
                schachbrett += weißeFelder;
                schachbrett += schwarzeFelder;
            }
            schachbrett += "/n";
        }
    }
    console.log(schachbrett);
}



brett(10);
