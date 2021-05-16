 namespace Aufgabe2_3 {

    export interface Behaelter {
        behaelterOptionen: string;
        bild: string;
    }

    export interface Eiskugel {
        sorte: string;
        
    }

    export interface Topping {
        soße: string;
    }

    export interface Eiscreme {
        _Behaelter: Behaelter;
        _Eiskugel: Eiskugel;
        _Topping: Topping;
    }

}