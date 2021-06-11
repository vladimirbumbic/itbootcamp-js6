class Auto {
    // konstruktor je ugradjeni metod koji svaka klasa mora da poseduje da bi kreirala objekat
    constructor(b, m){ 
        this._boja = b; // properti
        this._marka = m;
    }

    sviraj(){
        //console.log("Beep! beep!");
        console.log(`${this._marka} Beep! beep!`);
    }
}
// Kreiranje novog objekta - Kada se novi objekat kreira, prvo se poziva konstruktor klase, stoga za kreiranje objekta u zagradama je potrebno proslediti vrednosti koje zelimo da postavimo u onstruktoru tj. koje konstruktor ocekuje
let auto1 = new Auto("red", "Fiat"); //automatski pozivamo objekat konstruktor
console.log(auto1);
console.log(auto1._boja);
console.log(auto1["_boja"]);
auto1.sviraj();

let auto2 = new Auto("white", "Peugeot");
console.log(auto2._marka);
auto2.sviraj();

let auto3 = new Auto("blue", "Toyota");

let automobili = [auto1, auto2, auto3];
console.log(automobili);

/*
let auto100 = new Auto(["red", "orange", "yellow"], "Opel");
console.log(auto100._boja[1])
*/