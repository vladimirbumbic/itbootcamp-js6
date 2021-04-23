let a = 5;
let b = 7;

if( a == b ){
    console.log("a i b su jednake vrednosti");
}
else{
    console.log("a i b nisu jednake vrednosti");
}

if( a != b ){  /* a razlicito od b*/
    console.log("a i b nisu jednake vrednosti"); /*true*/
}
else{
    console.log("a i b su jednake vrednosti");
}

//Dodavanje HTML elementa iz script fajla
document.body.innerHTML = "<h1>Ovo je <i>if-else</i> naredba grananja</h1>";
document.body.innerHTML += "<h3>Zadaci</h3>"; /* prelepilo h3 ovo h1 u bodiju kad je i ovde =, i zato stavimo += da nadovezemo na prethodnu vrednost */

//ukoliko dodamo samo otvoren tag, automatski ce ga zatvoriti, i obrnuto otvara zatvoren tag-- znaci ovako ne treba pisati
//document.body.innerHTML += "<p>";
//document.body.innerHTML += "Zadaci az vezbanje...";
//document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML += 
`<p>
    Hello...
    <span>world</span>
</p>
<p>
    Godina je ${v} :)
</p>
`;

console.log("Vrednost promenljive v je " + v);
console.log(`Vrednost promenljive v je ${v}`);

let slika = "Red_rose.jpg";
document.body.innerHTML += `<img src="${slika}">`;

//1. Zadatak
let x = 20;
let y = 15;
if(x > y){
    console.log("x je veci od y")
}
else{
    console.log("y je manji od x")
}

//2.Zadatak
let t = 10;
if(t >= 0){
    console.log("temperatura je u plusu")
}
else{
    console.log("tempetatura je u minusu")
}

//3.Zadatak
let pol = "muski";
if(pol == "muski"){
    document.body.innerHTML += `<img src="musko.jpg">`
}

else{
    document.body.innerHTML += `<img src="zensko.webp">`
}

//4.Zadatak
let date = new Date();
console.log(date);
let trenutno = date.getHours();
console.log(trenutno);
if(trenutno > 12 ){
    console.log("trenutno je popodne")
}
else{
    console.log("trenutno je jutro")
}

//5.Zadatak
let date2 = new Date();
console.log(date2);
let godina = date2.getFullYear();
console.log(godina);
let godinaRodjenja = 1987;
if(godina - godinaRodjenja >= 18){
    console.log("Osoba je punoletna");
}
else{
    console.log("Osoba je maloletna");
}


//6.Zadatak
let u = 1;
let i = 2;
let o = 3;
if(u > i && u > o ){
    console.log("najveci je u")
}

else if(i > u && i > o){
    console.log("najveci je i")
}

else {
    console.log(`najveci je ${o}` )
}

//6. drugi nacin

let a1 = 5;
let a2 = 7;
let a3 = 13;

let maks = a1; //pretpostavimo da je maksimum prvi broj
if(a2 > maks) {
    maks = a2; //losa je pretpostavka, pa maks apdejtujemo da bude a2
}
if(a3 > maks){
    maks = a3;  //zato sto je a3 veci od moje pretpostavke
}
console.log(maks);

//IF - ELSE IF - ELSE

let broj = -5;
if(broj < 0){
    console.log("Broj je manji od nule");
}
else if(broj == 0){
    console.log("Broj je jednak nuli");
}
else{
    console.log("Broj je veci od nule");
}//moze ovde i else if(broj > 0){console.log("broj je veci od nule")} dakle nema elsa


console.log("KRAJ");

let ime = "Jelena";
let brSlova = ime.length;
if(brSlova > 10){
    console.log("Dugacko ime");
}
else{
    console.log("Nije dugacko ime")
}

//8.Zadatak
let date1 = new Date();
let danUNedelji = date.getDay();
console.log(danUNedelji);
if(danUNedelji <= 5){
    console.log("U pitanju je radni dan");
}
else{
    console.log("U pitanju je vikend");
} //if danUNedelji == 0  cons. vikend
  //else if danUNedelji ==6  cons. vikend
  //else cons. radni je dan

//9.Zadatak
if(date < 12){
    console.log("Dobro jutro");
}
else if(date < 18){
    console.log("Dobar dan");
}

else{
    console.log("Dobro vece")
}
//11.Zadatak
if(date > 17){
    console.log("Firma ne radi");
}
else if(date < 9){
    console.log("Firma ne radi");
}
else{
    console.log("Firma radi");
}

//7.Zadatak
let poeni = 85;
if(poeni <= 50){
    console.log("Ocena 5");
}
else if(poeni <=60){
    console.log("Ocena je 6");
}
else if(poeni <=70){
    console.log("Ocena je 7");
}
else if(poeni <=80){
    console.log("Ocena je 8");
}
else if(poeni <=90){
    console.log("Ocena je 9");
}
else{
    console.log("Ocena je 10");
}

