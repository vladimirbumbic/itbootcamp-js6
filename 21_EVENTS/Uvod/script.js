console.log("Events");
//Postupak dodavanja click eventa
// 1. Dohvatit dugme
let btn = document.querySelector("button");

//2.Dodati event listener na zeljeni element (on aktivno slusa sve sto se dogadja nad tim elementom)
//btn.addEventListener("poziv eventa", funkcija koja se realizuje kada se aktivira)
btn.addEventListener("click", ()=>{
    console.log("Jednostruku klik");
});
/////////////////////////////////

let dupliKlik = document.querySelector("#dupli_klik");
//let dupliKlik = document.getElementById("dupli_klik");
dupliKlik.addEventListener("dblclick", ()=>{ // ili function ()
    console.log("Dvostruki klik");
});

//////////////////////////

//2. NACIN DODAVANJA EVENTA
function klikni(){
    console.log("Kliknuto");
}

//////////////////////////////////////////////////////

//1.Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.


