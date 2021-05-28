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

//4. Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

