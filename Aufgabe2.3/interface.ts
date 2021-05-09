 namespace Aufgabe2_3 {

    export interface Behaelter {
        behaelterOptionen: String;
        bild: String;
    }

    export interface Eiskugel {
        sorte: String;
        
    }

    export interface Topping {
        soße: String;
    }

    export interface Eiscreme {
        _Behaelter: Behaelter;
        _Eiskugel: Eiskugel;
        _Topping: Topping;
    }

}