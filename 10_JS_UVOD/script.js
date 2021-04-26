console.log(3);
console.log(-15.3867);

console.log("Proizvoljan tekst");
console.log("Jos jedan tekst");
console.log("Mark's pen");
console.log('Mark"s pen');
console.log('Mark\'s pen');
console.log("Mark\"s Pen");

console.log("-15.3867");

console.log(3+5);
console.log("3" + "5");  // +radi kao konkatenacija stringova
console.log(3 + "5");  // broj 3 se konvertuje u string "3" pa se vrsi konkatenacija stringova
console.log("3" + 5);  //broj 5 se konvertuje u string "5", pa se vrsi konkatenacija stringova

console.log(true); //logicka vrednost true
console.log(false); // -II-  false

let x;  //deklarisanje promenljive 
console.log("tralala")
x = 3;  //x dobija vrednost 3 (trojku stavljamo u kutiju iks)

console.log(x);

x = 5;
console.log(x);

x = "Pera Zdera";
let y = true;
y = 0.5;
console.log(x, y);

const pi = 3.14;
console.log(pi);

// const pi = 3.1415; //ne mozemo ponovo deklarisati konstantu

let o = 2 * 5 * pi //ovako npr. moze
r = pi; // moze

let a;
console.log(a);  //undefined  vrednost promenljive, jer nismo rekli sta se nalazi u "a"

//console.log(b);  //uopste nije definisana promenljiva

let recenica = "JS kaze:\" Hello world! \" ";
console.log(recenica);

recenica = ` JS kaze: " Ili kupi alat, il ostavi zanat! " `
console.log(recenica);

let god;
console.log(god, god + 3 );  // undefined, NaN - not a number

let god1 = null; //null znaci prazna lokacija
console.log(god1, god1 + 3); // -3 bice -3, ali * ili / 3 bice 0, jer nista */ 3 je nula:)
//Konkatenacija stringova
let ime = "Jelena";
let prezime = "Matejic";
let imePrezime = ime + " " + prezime; // "" stavimo da bi bio razmak
console.log(imePrezime);
console.log(ime.length + prezime.length); // ako bude ime.length + "" + prezime.length bice samo -6 7-  ne mogu se sabirati brojevi i reci:P

//Osnovne aritmeticke operacije
let p = 7;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

//+=, -=, /=
p += 3; // ekvivalentno p = p + 3;
console.log(p); //10- zato sto smo stavili gore da je p=7

p -= 5; // p = p - 5;
console.log(p); //sad je p=10

//++ Povecava vrednost promenljive za 1
console.log(p);  //5
p++
console.log(p); //6


let d = 50;
console.log(d++);// 50 //d++ prvo ispise d, pa ga poveca za +1( u ovoj liniji ne vidimo povecanje)
console.log(d); //51  povecao je nakon prethodne linije

let k = 50;
console.log(++k); //51 //++k prvo poveca, pa onda ispise( u ovoj liniji odma vidimo povecanje)

//isto vazi i za --(minusminus) promenljivu (smanji-ispise, ispise-smanji)

/*
    7 / 3 = 2 ( plus ostatak 1)
*/
x = 7;
y = 3;
ost = 7 % 3; // racunanje ostatka pri deljenju
console.log(ost);

stepen = y**4;
console.log(stepen); // stepenovanje

let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + y1);
console.log(x1 + " " + y1);

let rezultat = 26 + "godina";  //broj + string jednako string, kao da su dva stringa
console.log(rezultat);

let rezultat1 = "26" + " godina";  //kad je pod navodnicima to je string "26" --razmak kod " godina" napravi razmak u konzoli
console.log(rezultat1);

 let rezultat3 = 26 + 1 + "godina";
console.log(rezultat3);

let rezultat4 = 26 + "godina" + 1;
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);

let rezultat6 = 26 / "godina"; //kad ne zna kako da izracuna- NaN
console.log(rezultat6);




