/*function test(){
    console.log("Pozvana je funkcija test");
}

console.log("Prva linija koda");
console.log("Druga linija koda");
//window.setTimeout(....);
setTimeout(test,3000); // test je kolbek funkcija- ne treba test()
//8. linija koda je poziv setTimeout funkcije, a ne test
//test(); //ovo je poziv test funkcije
console.log("Cetvrta linija koda");
console.log("Peta linija koda");
*/

//console.log(window);

/*
let datum={
    kisa:false,
    sunce:true,
    datum: "2021/05/31",
    neobicanDan : function(){
        this //this je u anonimnoj funkciji objekat koji je pozvao tu metodu
    },
    neobicanDan: ()=>{
        this.sunce(window.sunce) // this je u arror funkciji window objekat
    }
}
*/

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){ // anonimna kolbek funkcija
    console.log(this);// btn1
});



btn2.addEventListener("click", ()=> { //arrow kolbek funkcija
    console.log(this);// window
});

btn3.addEventListener("click", klikFunkcija);//// ovo je najredji pristup... imenovana kolbek funkcija
function klikFunkcija(){ //imenovana funkcija
    console.log(this); 
}

/////////////////////////////////////////

let b1 = document.getElementById("b1");
let divIspis = document.getElementById("ispis");
let b2 = document.getElementById("b2");
let clock=null; //prazna vrenost, tu se nista ne nalazi

/*

0   0.2   0.4   0.6   0.8   1   1.2   1.4   1.6   1.8   2   2.2   2.4(sekunde)
cl1       cl2                  cl1i     cl2i

*/

b1.addEventListener("click",()=>{
    if(clock === null){
   clock= setTimeout(function(){
        let datum = new Date();
        let sati = datum.getHours();
        let minuti = datum.getMinutes();
        let sekundi = datum.getSeconds();
       // divIspis.innerHTML = "Dodat tekst iz JS-a!";
        divIspis.innerHTML += `${sati}:${minuti}:${sekundi}`;
        clock = null;
    }, 1000);
}
});


b2.addEventListener("click", ()=>{
    clearTimeout(clock);
    clock = null;
});


let clockInterval=null;

console.log("Prva linija koda");
console.log("Druga linija koda");
clockInterval = setInterval(()=>{
    console.log("Poziv callback funkcije");
},1000);
console.log("Cetvrta linija koda");
console.log("Peta linija koda");

setTimeout(()=>{
    clearInterval(clockInterval);
}, 5000);
console.log("Sedma linija koda");
console.log("Osma linija koda");

let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let divIspis2 = document.getElementById("ispis2");
let clockPeriod = null;

/*
   0   0.5   1   1.5   2   2.5   3   3.5   4      ............
   c1        c1  c2    c1  c2    c1  c2    c1
*/

b3.addEventListener("click", ()=>{
    if(clockPeriod===null){
        clockPeriod= setInterval(()=>{
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            divIspis2.innerHTML +=`${sati}:${minuti}:${sekunde}`;
        },1000/5) // 5 puta u sekundi otkucava clockPeriod
    }
});

b4.addEventListener("click", ()=>{
clearInterval(clockPeriod);
clockPeriod=null;
});

/////////////////////////////////////

let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let input = document.getElementById("inp");
let timer = null;
input.value=1;


b5.addEventListener("click", ()=>{
    if(timer===null){
        timer=setInterval(()=>{
            input.value++;
        },1000)
    }
});

b6.addEventListener("click", ()=>{
    clearInterval(timer);
    timer=null;
});