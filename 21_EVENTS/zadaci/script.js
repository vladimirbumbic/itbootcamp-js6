//1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector("#brojac");
let br = 1;
btnBrojac.addEventListener("click", ()=>{
   // br++; 
    console.log(br); //krenulo bi od 2 ako je gore br++, ili da ostane, al onda gore br=0 
    br++;
});

//2. Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.getElementById("brojac1");
let pIspisBrojaca1 = document.getElementById("ispisBrojaca1");
let br1=0;

pIspisBrojaca1.innerHTML = br1;

btnBrojac1.addEventListener("click", ()=>{
    br1++;
   // pIspisBrojaca1.innerHTML += br1;  ili `${br1}` 
   pIspisBrojaca1.innerHTML = br1;
});

//3. Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let brP = 0;
let s = document.getElementById("span");

s.innerHTML= brP;

plus.addEventListener("click", ()=>{
    s.style.color="black";
    brP+=1;
    s.innerHTML = brP;
});
minus.addEventListener("click", ()=>{
    s.style.color="black";
    brP--;
    if(brP < 0){ // <=0 odma oboji kad bude 0
        brP=0;
        s.style.color="red";
    }
    
 s.innerHTML= brP;
   
});


//5. Napraviti input polje i dugme.U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

//DOM
let btnPosalji = document.getElementById("posalji");
let inputIme = document.getElementById("ime");
let pPrikaziIme = document.getElementById("prikaziIme");

btnPosalji.addEventListener("click", ()=>{
    let upisanoIme = inputIme.value;
    //console.log(upisanoIme);
    pPrikaziIme.innerHTML = `Zdravo ${upisanoIme}`;
});

//6. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

btnPosalji.addEventListener("dblclick", ()=>{
    let upisanoIme = inputIme.value;
    alert(`Hello ${upisanoIme}`);
});

// 5. zadatak drugi nacin, preko forme
let inputPrezime = document.getElementById("prezime");
let btnPosaljiPrezime = document.getElementById("posaljiPrezime");
let pPrikaziPrezime = document.getElementById("prikaziPrezime");

btnPosaljiPrezime.addEventListener("click", (e)=>{  //ili e bez zagrade
    e.preventDefault(); // sprecavamo podrazumevano ponasanje a to je da se rilouduje stranica
    console.log(e);
    pPrikaziPrezime.innerHTML = ` Uneli ste prezime ${inputPrezime.value}`;
    inputPrezime.value = ""; // skloni napisano iz inputa
});

//7.
let inputKvadriraj = document.getElementById("kvadriraj");
let btnKv = document.getElementById("kva");

let inputPrepolovi = document.getElementById("prepolovi");
let btnPr = document.getElementById("pre");

let inputPovrsina = document.getElementById("povrsina");
let btnPo = document.getElementById("pov");

let pJedan = document.getElementById("jedan");
let pDva = document.getElementById("dva");
let pTri = document.getElementById("tri");

btnKv.addEventListener("click", (e)=>{
    let broj= inputKvadriraj.value;
    pJedan.innerHTML = `${broj**2}`;
    e.preventDefault();
});

btnPr.addEventListener("click", e=>{
    let broj= inputPrepolovi.value;
    pDva.innerHTML = `${broj/2}`; //  pDva.innerHTML = Number (broj/2)  pretvara string u broj, ukoliko je input type text u htmlu, a ne input type number
    e.preventDefault();
});

btnPo.addEventListener("click", e=>{
    let broj = inputPovrsina.value;
    pTri.innerHTML = broj**2*3.14;
    e.preventDefault();
});
/*
let broj= inputPovrsina.value**2;
let pi=3.14;
pTri.innerHTML = broj* Math.PI;
*/


//PRIMER
let forma = document.getElementById("forma");
let inputJelo = document.getElementById("jelo");
let inputPice = document.getElementById("pice");
let pIspis = document.getElementById("ispis");

forma.addEventListener("submit", (e)=>{ //na formu zakacimo, a ne button, i onda forma slusa, click je za button
    e.preventDefault();
    pIspis.innerHTML = 
   `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno pice: ${inputPice.value}</li>
    </ul>`
    forma.reset(); //resetuje sva polja u formi na koja se odnosi
});