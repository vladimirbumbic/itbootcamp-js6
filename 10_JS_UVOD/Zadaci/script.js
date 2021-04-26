console.log("Zadaci - Dodela vrednosti");

// 1. Zadatak
/*
Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
 s-sati, m-minuti*/

let s = 12;
let m = 15;
let odPonoci =s*60 + m;
console.log(" Od ponoci je proslo: ", odPonoci);

let doPonoci = 24*60 - odPonoci;
console.log("Do ponoci je preostalo:", doPonoci); //705 minuta


//3. zadatak
let cr1 = 100;
let cr2 = 200;
let un = 500;
let kusur =un - cr1;
console.log(kusur);
let kusur2 =un - cr2;
console.log(kusur2);


let da = 20;
let me = 04;
let go = 2021;
let datum1 = "da" + "." + "me" + "." + "go" + ".";
console.log(datum1);
let datum2 = "go" + "/" + "me" + "/" + "da" + ".";
console.log(datum2);



//zadaaciiiiiiiiiiii

//2. zadatak 
/*Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
*/
//1. nacin
let minOdPonoci = 123; // 123 / 60 = 2 (ost 3) dakle 2 sata i 3 min
let h = Math.floor (minOdPonoci/60); //ova funkcija zaokruzuje na donji ceo broj,  Math.round zaokruzuje na najpriblizniji ceo broj, Math.ceil zaokruzuje na gornji ceo broj
let min = minOdPonoci % 60;
console.log(h, ":", + min);

//2.nacin
min = minOdPonoci % 60;
h = (minOdPonoci - min)/60;
console.log(h, min);

//3. zadatak
/*
Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
*/
let cenaRobe = 120;
let novcanica = 200;
let kuusur = novcanica - cenaRobe;
console.log(kuusur);

// 4. zadatak
/*
Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
*/ 
let date = new Date(); //Objekat koji vraca datum
console.log(date);
let danUNedelji = date.getDay(); //vraca dan u nedelji (od 0 do 6, pri cemu je 0 nedelja)
console.log(danUNedelji);
let danUMesecu = date.getDate(); //vraca dan u mesecu
console.log(danUMesecu);

let trenutnoSati = date.getHours();
let trenutnoMinuta = date.getMinutes();
let trenutnoOdPonoci = trenutnoSati*60 + trenutnoMinuta;
console.log(trenutnoOdPonoci);

//5. zadatak
/*Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

//6. zadatak
/*evro u dinare*/
let novacEvri = 200;
let kursEvra = 117.2;
let evriUDinare = novacEvri * kursEvra;
console.log(evriUDinare);

//dinari u evre
let novacDinari = 2000;
let dinariUEvre = novacDinari / kursEvra;
console.log(dinariUEvre);


