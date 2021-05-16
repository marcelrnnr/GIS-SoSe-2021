
namespace Aufgabe2_4 {

    export interface EisPart {
        beschreibung: string;
        bild: string;
    }
    export interface Eiscreme {
        behaelter: EisPart[];
        eiskugel: EisPart[];
        topping: EisPart[];
    }


    


    export let alleBehaelter: string =

`
    {
        "behaelter": [
            {
                "beschreibung": "Waffel",
                "bild": "media/waffel.png"
            },
            {
                "beschreibung": "Becher",
                "bild": "media/becher.png"
            },
            {
                "beschreibung": "Stiel",
                "bild": "media/Stiel.png"
            }
        ],
            "eiskugel": [
                {
                    "beschreibung": "Schocko",
                    "bild": "media/schockoEis.png"
                },
                {
                    "beschreibung": "Vanille",
                    "bild": "media/Vanilleeis.png"
                },
                {
                    "beschreibung": "Banane",
                    "bild": "media/BananeEis.png"
                }
            ],
                "topping": [
                    {
                        "beschreibung": "Erdbeersoße",
                        "bild": "media/erdbeerSoße.png"
                    },
                    {
                        "beschreibung": "Vanillesoße",
                        "bild": "media/vanilleSoße.png"
                    },
                    {
                        "beschreibung": "Schockosoße",
                        "bild": "media/soßeSchocko.png"
                    }
                ]
    }
`;

}