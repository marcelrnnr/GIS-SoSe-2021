"use strict";
//**1 a) */
function min(_arr) {
    let min = _arr[0];
    for (let i = 0; i < Array.length; i++) {
        if (min > _arr[i]) {
            min = _arr[i];
        }
    }
    return min;
}
console.log(min([10, 3883, -334, 33, -2222]));
/**b) */
let number1 = 50;
let number2 = 75;
function isEven(_num) {
    _num = Math.abs(_num);
    if (_num == 0) {
        return true;
    }
    if (_num == 1) {
        return false;
    }
    return isEven(_num - 2);
}
console.log(isEven(50));
/**c) */
/*
namespace Aufgabe2_2 {
    let arr2: number[] = [];
    console.log(arr2);

    interface Person {
        name: string;
        vorname: string;
        alter: number;
    }

    let person1name: string = "Renner";
    let person1vorname: string = "Marcel";
    let person1alter: number = 26;

    let obj = { a: 1, d: 2 };
    let p1: Person = {
        vorname: "Marcel",
        name: "Renner",
        alter: 24
    };
    console.log(p1.alter);
}


interface Person {
    name: string;
    vorname: string;
    alter: number;
}


let obj = { a: 1, d: 2 };
let p1: Person = {
    vorname: "Marcel",
    alter: 24,
    name: "Renner"
};
let p2: Person = erschaffePerson("Marcel", "Renner", 24);

console.log(p1.alter);

function erschaffePerson(_name: string, _vorname: string, _alter: number): Person {
    let p: Person = { name: _name, vorname: _vorname, alter: _alter };
    return p;
}

let personenArray: Person[] = [];
personenArray.push(p1);
personenArray.push(p2);
personenArray.push({ name: "Müller", alter: 22, vorname: "Otto" });

*/
/**Aufgabe 2 */
/*
function backwards[]
*/ 
//# sourceMappingURL=script.js.map