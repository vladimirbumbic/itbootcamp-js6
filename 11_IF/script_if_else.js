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
document.body.innerHTML += "<h3>Zadaci</h3>"; /* prelepilo bi h3 ovo h1 u bodiju ako je i ovde =, i zato stavimo += da nadovezemo na prethodnu vrednost */

//ukoliko dodamo samo otvoren tag, automatski ce ga zatvoriti, i obrnuto otvara zatvoren tag-- znaci ovako ne treba pisati
//document.body.innerHTML += "<p>";
//document.body.innerHTML += "Zadaci az vezbanje...";
//document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML += 
`<p>
    Hello...
    <span style="color: red">world</span>
</p>
<p>
    Godina je ${v} :)
</p>
`;
//ili preko css-a  dodamo spanu class i style.css linkujemo i tamo uradimo
console.log("Vrednost promenljive v je " + v);
console.log(`Vrednost promenljive v je ${v}`);
console.log("Vrednost promenljive v je", v);


let slika = "Red_rose.jpg";
document.body.innerHTML += `<img src="${slika}">`;

//1. Zadatak
let x = 20;
let y = 15;
if(x > y){
    console.log("x je veci od y")
}
else{
    console.log("x je manji od y")
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
let danUNedelji = date1.getDay();
console.log(danUNedelji);
if(danUNedelji <= 5){
    console.log("U pitanju je radni dan");
}
else{
    console.log("U pitanju je vikend");
} //if danUNedelji == 0  console.log  vikend
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

//10.Zadatak -Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
let dat1 = "2001-04-23";
let dat2 = "2021-05-01";
if(dat1 < dat2){
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if(dat2 < dat1){
    console.log(`${dat2} je bio pre ${dat1}`);
}
else{
    console.log(`${dat1} i ${dat2} su isti`);
}

//2.nacin
let dan1 = 01;
let mes1 = 01;
let god1 = 2020;

let dan2 = 01;
let mes2 = 05;
let god2 = 2020;

if(god1 < god2){
    console.log("Datum 1 je raniji");
}

else if(god2 < god1){
    console.log("Datum 2 je raniji"); //ako ne upadne ni u jedno ni u drugo, automatski znaci da su jednake
}

else if(mes1 < mes2){
    console.log("Datum 1 je raniji");
}

else if(mes2 < mes1){
    console.log("Datum 2 je raniji");
}
//posto su godine i meseci isti, proveravamo dane
else if(dan1 < dan2){
    console.log("Datum 1 je raniji");
}

else if(dan2 < dan1){
    console.log("Datum 2 je raniji");
}

else{
    console.log("Datum 1 i datum 2 su isti");
}

///////////////////
let stepeni = -10;
if(stepeni < 0){
    console.log("Ispod 0 stepeni");
}
if(stepeni < 10){
    console.log("Ispod 10 stepeni");
}
if(stepeni < 20){
    console.log("Ispod 20 stepeni");
}
else{
    console.log("20 i vise stepeni")
}

////////////////
let stepen = -10;
if(stepen < 0){
    console.log("Ispod 0 stepeni");
}
else if(stepen < 10){
    console.log("Ispod 10 stepeni");
}
else if(stepen < 20){
    console.log("Ispod 20 stepeni");
}
else{
    console.log("20 i vise stepeni")
}

//////////////////
let points = 81;
if(points > 100){
    console.log("Poeni ne mogu uzeti vrednost vecu od 100");
}

else if(points >= 91){
    console.log("Ocena je 10");
}
else if(points >= 81){
    console.log("Ocena je 9");
}
else if(points >= 71){
    console.log("Ocena je 8");
}
else if(points >= 61){
    console.log("Ocena je 7");
}
else if(points >= 51){
    console.log("Ocena je 6");
}
else{
    console.log("Pali ste ispit")
}

//////////////

let poll = "m";
let god = 32;

if(poll == "z"){
    console.log("Osoba zenskog pola");
    if(god >= 18){
    console.log("Osoba je zenskog pola i punoletna");
    }
    else{
        console.log("Osoba je zenskog pola i maloletna");
    }
}
else{
    console.log("Osoba muskog pola");
    if(god >= 18){
        console.log("Osoba je muskog pola i punoletna");
    }
    else{
        console.log("Osoba je muskog pola i maloletna");
    }
}

//12.Zadatak
let p1 = 14; 
let k1 = 20;

let p2 = 8;
let k2 = 16;

if(k1 < p2){
    console.log("NE preklapaju se smene");
}
else if(k2 < p1){
    console.log("NE");
}
else{
    console.log("DA");
}

let brroj1 = 5;
let brroj2 = 3;
if(brroj1 % brroj2 == 0){
    console.log(`${brroj1} je deljiv brojem ${brroj2}`);
}

else{
    console.log(`${brroj1} nije deljiv brojem ${brroj2}`);
}


//13.Zadatak
let unBr = 10;
if(unBr % 2 == 0){
    console.log("Broj je paran");
}
else{
    console.log("Broj je neparan");
}

//14. Zadatak
let uB = 11;
if(uB % 3 == 0){
    console.log("Broj je deljiv sa tri");
}
else{
    console.log("Broj nije deljiv sa tri");
}

//15.Zadatak
let qw = 8;
let we = 10;
if(we > qw){
    console.log("Razlika je", we - qw)
    console.log(`Razlika je ${we-qw}`);
}
else{
    console.log(`Razlika je ${qw-we} `)
}


//16. Zadatak
let vb = 6;
if (vb <= 0){    
    vb = --vb;
    console.log(`Broj je manji od nule.Njegov prethodnik je ${vb}`)
}
else{
    vb= ++vb;
    console.log(`Broj je veci od nule.Njegov sledbenik je ${vb}`)
}





//brojj++  isto je kao i
//broj+= 1
//broj=broj+1

//17.Zadatak
let xe = 12;
let ye = 22;
let ze = 11;
let max = xe;
let mid = ye;
let min = ze;
let zbir = xe + ye + ze;
if ( ye > max ) {
    max = ye;
}
if ( ze > max ) {
    max = ze;
}
if ( ye < min ) {
    min = ye;
}
if ( xe < min ) {
    min = xe;
}
mid = zbir - max - min;
console.log (`${max} je najveci, ${mid} je srednji, ${min} je najmanji.`);
//2.nacin
/*let c1 = 23;
let c2 = 31;
let c3 = 13;
if ( c1 > c2 && c1 > c3){
    console.log(`broj ${c1} je najeveci`);
    if ( c2 > c3){
        console.log(`broj ${c2} je srednji, a broj ${c3} najmanji`);
    }else if( c2 < c3){
        console.log(`broj ${c3} je srednji, a broj ${c2} najmanji`);
    }
}
if ( c2 > c1 && c2 > c3){
    console.log(`broj ${c2} je najeveci`);
    if ( c1 > c3){
        console.log(`broj ${c1} je srednji, a broj ${c3} najmanji`);
    }else if( c1 < c3){
        console.log(`broj ${c3} je srednji, a broj ${c1} najmanji`);
    }
}
if ( c3 > c2 && c3 > c1){
    console.log(`broj ${c3} je najeveci`);
    if ( c2 > c1){
        console.log(`broj ${c2} je srednji, a broj ${c3} najmanji`);
    }else if( c1 < c2){
        console.log(`broj ${c2} je srednji, a broj ${c1} najmanji`);
    }   
}
*/

//18.Zadatak
let bv = 4.5;
let ceo = bv % 1;
if( ceo== 0){
    console.log(`${bv} je ceo broj`)
}
else{
    console.log(`${bv} nije ceo broj`)
}
//ili let ceo =-14 if(ceo % 1 == 0){con.log("broj je ceo")} else{con.log("broj nije ceo")}

//20.Zadatak
let nekiBroj = 24;
let nekiDrugiBroj = 22;
if(nekiBroj > nekiDrugiBroj){
      if(nekiBroj % 2 ==0){
    console.log(`nekiBroj je veci i paran`);}
    else {
        console.log(`nekiBroj je veci, ali nije paran`);
    }
}
 else if (nekiDrugiBroj > nekiBroj){
    if(nekiDrugiBroj % 2 == 0){
        console.log(`nekiDrugiBroj je veci i paran`)
    }
else{
    console.log(`nekiDrugiBroj je veci, ali nije paran`)
}
}
