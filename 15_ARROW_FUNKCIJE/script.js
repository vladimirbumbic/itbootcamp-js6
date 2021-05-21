//Imenovane funkcije
function suma(a,b){   //Deklaracija imenovane funkcije
    return a + b;
}

console.log(suma(1,2));  //Poziv funkcije: ime funkcije i prosledjivanje vrednosti


//Anonimne funkcije
let suma2 = function(a,b){  //Deklaracija anonimne funkcije
    return a + b;
}

console.log(suma2(3,4));  //Poziv anonimne funkcije je preko pormenljive u kojoj je sacuvana


//Arrow funkcije
let suma3 = (a,b) => {
    return a + b;
}

console.log(suma3(4,6));


//Arrow funkcija koja ispisuje "Hello world!"
let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

//Arrow funkcija koja pozdravlja korisnika
let korisnik = (ime) => {
    console.log(`Hello ${ime}!`);
}

korisnik("Stefan");
korisnik("Jelena");

//Arrow funkcija koja ispisuje ime korisnika, kao i pravni status
let korisnik2 = (ime, godine) => {
    if(godine<18){
        let ispis = "Korisnik " + ime + " je maloletno lice";
        document.body.innerHTML += `<p style="color:green">${ispis}</p>`;
    }
    else{
        let ispis = "Korisnik " + ime + " je punoletno lice";
        document.body.innerHTML += `<p style="color:yellow">${ispis}</p>`;
    }
}

korisnik2("Glorija", 28);
korisnik2("Petar", 7);

//3. zadatak
let neparan = (n) => {
    if(n%2==1){
        return true;
    }
    else{
        return false;
    }
}
neparan(12);
console.log(neparan(12));

//4. zadatak
let maks2 = (x, y) => {
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}
maks2(3,9);
console.log(maks2(3,9));

let maks4 = (x, y, a, b) =>{
    let n1 = maks2(x,y);
    let n2 = maks2(n1, a);
    let n3 =maks2 (n2, b);
    return n3;
}
maks4(2,5,8,9);
console.log(maks4(2,5,8,9));

//5. zadatak
let slika = (putanja) => {
    document.body.innerHTML += `<img src="${putanja}">`;
}
slika("images/1.jpg");
slika("images/2.jpg");
slika("images/3.jpg");

//6. zadatak
let color = (boja) => {
    document.body.innerHTML += `<p style="color:${boja}";>Tekst paragrafa</p>`
}
color("green");

//8.
let deljivSaTri = (n,m) =>{
    let broj = 0;
    for(let i=n;i<=m;i++){
        if(i%3==0){
            broj+=1;
        }
    }
    return broj;
}
deljivSaTri(1,9);
console.log(deljivSaTri(1,9));

//9. zadatak
let sumiraj = (n,m) =>{
    let zbir = 0;
    for(let i =n;i<=m;i++){
        zbir+=i;
    }
    return zbir;
}
sumiraj(2,6);
console.log(sumiraj(1,5));

//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike
//Prvi nacin
let slika1 = (putanja) =>{
   // document.body.innerHTML += `<img src="${putanja}">`;
   return `<img src="${putanja}">`;
}

//Drugi nacin
let slika2 = (putanja) => `<img src="${putanja}">`;

//treci nacin
let slika3 = putanja => `<img src="${putanja}">`;

//Pozivi
document.body.innerHTML += slika1("images/1.jpg");
document.body.innerHTML += slika2("images/2.jpg");
document.body.innerHTML += slika3("images/3.jpg");


//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let max2 = (a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
    //???? return if(a>b) {a} else {b}
}

let max22 = (a,b)=> (a>b) ? a:b;  //1 ? 2 : 3 

/*let max4 = (a,b,c,d)=>{
    return max22(max22(a,b), max22(c,d));
}   i onda obrisemo return i zagrade i bude kao dole*/
let max4 = (a,b,c,d)=> max22(max22(a,b), max22(c,d));
let makss4 =(a,b,c,d)=> max22(max22(max22(a,b), c), d);

console.log(max22(3,4));
console.log(max22(4,3));
console.log(max4(4,7,9,3));
console.log(makss4(4,7,9,3));


//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan2 = (n) =>{
    if(n%2 ==1){
        return true;
    }
    else{
        return false;
    }
}
console.log(neparan2(5));
console.log(neparan2(6));

let neparan3 = n => (n%2==1);  //let neparan3 = n => (n%2==1) ? :
console.log(neparan3(7));
console.log(neparan3(8));

let neparan4 = n => (n%2==1) ? true : false;
console.log(neparan4(9));
console.log(neparan4(8));