let pr = 4;
let pr2 = 50;
if(pr < 10){
    pr = "0" + pr;
}
if(pr2 < 10){
    pr2 = "0" + pr2;
}
console.log(pr); //poziv funkcije log
console.log(pr2);

//Definicija funkcije (telo funkcije)

function mojaFunkcija (){
    console.log(`Zdravo svete!`);
    /* let poruka = "Zdravo svete!";
    console.log(poruka);*/
}

console.log("Neki tekst pre poziva funkcije");

//Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije");

//Opet poziv funkcije
mojaFunkcija();


//Definicija druge funkcije
function ispisiTekst(tekst){
    console.log("Ispisujem tekst: " + tekst);  //Parametar je -> tekst
}

//pozivi funkcije
ispisiTekst("ITBootcamp");  //Prilikom poziva funkcije prosledjuje se neka vrednost
ispisiTekst(`Pera Peric`);
ispisiTekst(25);

let x = "Mika";
ispisiTekst(x);

console.log(x);
//console.log(tekst); //jer tekst vazi samo u okviru funkcije, dok se izvrsava

let tekst = "Zika"; //Globalan promenljiva, razlicita promenljiva od one iz funkcije...
ispisiTekst(tekst); //Prosledjuje se vrednost promenljive

console.log(tekst); //ovo nije parametar tekst, nego globalna promenljiva


function test(x){
    if(x %2 ==0) {
        var y = "Paran"; //var- function scope (promenljiva vazi unutra funkcije)
    }
    else {
        let z = "Neparan"; //let- block scope (promenljiva vazi unutar bloka, tj {})
    }

console.log(x);
console.log(y);
console.log(z);
}

//test(6);
//test(5);
//console.log(y);  ne postoji van funkcije

//Definicija funkcije
function korisnik(ime, prezime){
    console.log(`Korisnik: ${ime} ${prezime}`);
}

//poziv fumkcije
korisnik("Pera", "Peric");
korisnik("Laza, Lazic");  //druga vrednost je undifined

//Napisati funkciju koja ispisuje ime i prezime korisnika(koji se prosledjuju kao parametri),
//kao i info da li je prezime korisnika dugacko(ako ima vise od 10 karaktera)

function korisnikPrezime(ime, prezime){
    if(prezime.length > 10){
        console.log(`Korisnik ${ime} ${prezime} ima dugacko prezime`);
    }
    else{
        console.log(`Korisnik ${ime} ${prezime} nema dugacko prezime`);
    }
}

korisnikPrezime("Jelena", "Matejic");
korisnikPrezime("Stefan", "Stanimirovic");


function korisnikGodine(ime, god){
    if(god >= 18){
        console.log(`Korisnik ${ime} ima ${god} godina i punoletna je osoba`)
    }
    else{
        console.log(`Korisnik ${ime} ima ${god} godina i maloletna je osoba`)
    }
}
korisnikGodine("Pera", 29);
korisnikGodine("Laza", 15);


//funkcija koja ISPISUJE zbir svoja dva parametra
function zbir1(a,b){
    let rez= a + b;    //a= a + b        //ne moze let a=a+b jer ne mogu promenljiva i parametar da budu isti, tj. a
    console.log(rez);
}
zbir1(2, 3);
//console.log(a);  prijavio bi gresku, jer se sa zbir1(2,3) izvrsila funkcija
//console.log(b);  ni ovo ondane radi, jer a i b ne postoje u ovom trenutku
let a = 10;
let b = 8;
zbir1(a, b);
//console.log(a);   a=-3
//console.log(b);   b=7

/*
let datum = new Date();
let dan = datum.getDay(); //VRACA dan u nedelji
if(dan ==6 || dan==0){ //vikend

}
else{ //radni dan

}

datum.getDay(); //NE ISPISUJE dan u nedelji
*/

//Funkcija koja VRACA zbir svoja dva parametra
function zbir2(a,b){
    let rez = a + b;
    return rez;
}

let z = zbir2(5,6);
console.log(z);
console.log(`Zbir brojeva 5 i 6 jednaka je: ${z}`);
console.log(`Sum of numbers 5 and 6 is equal to: ${z}`);

if(z>= 0){
    console.log("Zbir je nenegativan broj");
}
else{
    console.log("Zbir je negativan broj");
}

if(zbir2(-5, -6) >= 0){  //-11>=0
    console.log("Zbir borjeva -5 i -6 je nenegativan broj");
}
else{
    console.log("Zbir borjeva -5 i -6 je negativan broj");
}

let s = zbir2(5, 8) + zbir2 (8,9);
//          13      +     17
//  s = 30
if(s % 2 == 0){
    console.log("Zbir ova cetiri broja je paran");
}
else{
    console.log("Zbir ova cetiri broja je neparan");
}


function proizvod(a, b){
    return a*b;
    console.log("Hello world");  //nece biti izvrsen. Ako ga stavimo ispred return, onda hoce.
}

//return ima dvojaku ulogu
//1. PREKIDA izvrsenje funkcije--- sve posle return-a nece biti izvrseno
//2. VRACA vrednost funkciji u kojoj se nalazi

console.log(proizvod(5,6));


//3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n){
    if(n%2 == 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(neparan(5));
console.log(neparan(6));

let m = 18;
if(neparan(m)){       // To je ustvari -> (neparan(m) == true)
    console.log(`Broj ${m} je neparan`);                  //jer (neparan(m)  vec vraca da li je true ili false zbog ovog gore
}
else{
    console.log(`Broj ${m} je paran`);
}
   

//4.Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
/*let veci;
function maks2(broj1, broj2){
    if(broj1 > broj2){
        veci = broj1;
    }
    else{
        veci=broj2
    }
return veci;
}
console.log(maks2(4,10));
*/

function max2(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

function max4(a,b,c,d){
    let m1 = max2(a,b);  //m1- BROJ (veci od a i b)
    let m2 = max2(c,d);   //m2- BROJ (veci od c i d)
    let m3 = max2(m1,m2);
    return m3;
    }
console.log(max4(2,3, 5 ,8));
    //drugi nacin
    function max4(a,b,c,d){
        return max2(max2(a,b), max2(c,d));
    }
    console.log(max4(4,-6,10,3));
    

    //treci nacin
    
    function max4(a,b,c,d){
        let m1 = max2(a,b)    //max(a,b)
        let m2 = max2(m1,c)   //max(a,b,c)
        let m3 = max2(m2, d)  //max(a,b,c,d)
        return m3;
    }
    console.log(max4(4,-6,10,3));
    

//5.Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function dodajSliku(putanja){
    document.body.innerHTML += `<img src="${putanja}">`;
}

//dodajSliku("Pera");
//dodajSliku(4);
//dodajSliku(true);
dodajSliku("images/1.jpg");
dodajSliku("images/2.jpg");
dodajSliku("images/3.jpg");



//6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function color(boja){
    document.body.innerHTML += `<p style="color: ${boja}">Paragraf preko funkcije</p>`
}
color("red");

//7.
function sedmiDan(n){
    let ostatak = n%7;
    switch(ostatak){
        case 0:
            console.log("Nedelja");
            break;
        case 1:
            console.log("Ponedeljak");
            break;
        case 2:
            console.log("Utorak");
            break;
        case 3:
            console.log("Sreda");
            break;
        case 4:
            console.log("Cetvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
        case 6:
            console.log("Subota");
            break;
    }
}
sedmiDan(0);


//8.
function deljivSaTri(n,m){
    let broj = 0;
    if(n<m){
    for(let i=n;i<=m;i++){
        if(i%3==0){
        broj+=1;
    }
}
    }
    else{
        for(let i=m;i<=n;i++){
            if(i%3==0){
            broj+=1;
    }
}
    }
   return broj;
}
console.log(deljivSaTri(1,9));

//9.
function sumiraj(n,m){
    let zbir = 0;
    if(n<m){
    for(let i=n;i<=m;i++){
        zbir+=i;
    }
}
else{
    for(let i=m;i<=n;i++){
        zbir+=i;
}
}
   return zbir;
}
console.log(sumiraj(2,5));

//10.
function mnozi(n,m){
    let proizvod =1;
    for(let i=n;i<=m;i++){
        proizvod*=i;
    }
    return proizvod;
}
console.log(mnozi(2,4));

//11.
function arsr(n,m){
    let suma = 0;
    let broj = 0;
    if(n<m){
    for(let i=n;i<=m;i++){
        suma += i;
        broj+=1;
    }
}
else{
    for(let i=m;i<=n;i++){
        suma += i;
        broj+=1;
}
}
    return suma / broj;
}
console.log(arsr(1,5));

//12.
function arsr2(n,m){
    let suma = 0;
    let broj = 0;
    for(let i=n;i<=m;i++){
        if(i%10==3){
            suma += i;
            broj += 1;
        }
    }
    return suma / broj;
}
console.log(arsr2(1, 23));

//13.
function ceoBroj(n){
    document.body.innerHTML += `<p style="font-size:${n}px">Neki tekst sa velicinom fonta ${n}</p>`
}

ceoBroj(100);

//14.
function petPuta(){
    for(let i=1;i<=5; i++){
        document.body.innerHTML += `<p style="font-size: ${i}em;">Neki tekst sa velicinom teksta ${i}em</p>`;
    }
}
petPuta();

//15.
function praksa(n,a){
    let d= 50;
    let ukupnaZarada=n*a;
    for(i=2;i<=n;i++){     //zato sto je povisica od drugog meseca
        ukupnaZarada+=d;
    }
    console.log(ukupnaZarada);
}
praksa(6,500);
///////////////////////////////////
let plata =(n,a)=>{
    let sumaNovca = 0;
    let d= 50;
    for(let i=1;i<=n;i++){
        sumaNovca+=a+d;
    }
    return sumaNovca-d; //zbog prvog meseca kad nema povisice
}
console.log(plata(6,500));
/////////////////////////////////

//16.
let prolaz=(t,p,n)=>{
    if(p>t){
        return 0;
    }
    else{
        return Math.abs(p+n-t);
    }
}
console.log(`Tim treba da krene sa starta ${prolaz(15,14,45)} sekundi nakon pocetka merenja vremena kako bi prosao poligon bez zaustavljanja`);
//////////////////////
let sviDaProdju =(t,p,n)=>{
    if(p>t){
        return 0;
    }
    else{
        return(n-(t-p));
    }
}
console.log(sviDaProdju(15,14,45));