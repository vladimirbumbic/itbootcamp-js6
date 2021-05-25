//U DOM-u svaki HTML element je jedan JS objekat

console.log(document);
console.log(typeof document);

console.log(document.URL);  //string
console.log(document.body); //objekat iz DOM stabla
console.log(document.documentElement); //objekat iz DOM stabla

console.log(document.anchors);
console.log(document.links);

let r1=document.getElementById("div1");
console.log(r1); // objekat koji ima navedeni id

let r2=document.getElementsByClassName("container");
console.log(r2); //HTMLCollection svih objekata koji imaju datu klasu

let r3=document.getElementsByTagName("div");
console.log(r3); //HTMLCollection svih objekata koji imaju navedeni tag name

let r4=document.getElementsByName("link");
console.log(r4); //NodeList svih objekata koji imaju navedeni atribut

/*
HTMLCollection ne poseduje forEach metodu !
r2.forEach(obj => {
    console.log(obj);
});
*/

//Prolazak kroz elemente HZMLCollection for petljom
for(let i=0; i<r2.length; i++){
    console.log(r2[i]);
}

//Moze se HTMLCollection konvertovati u niz, pa onda za Array koristiti forEach petlju
let r2array = Array.from(r2);
r2array.forEach(obj=>{
    console.log(obj);
});

//Elementima NodList-e moze se pristupiti i preko for i preko forEach petjle
r4.forEach(obj=>{
    console.log(obj)
});

for(let i=0; i<r4.length;i++){
    console.log(r4[i]);
}

let r5=document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem=>{
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7);

//document.getElementsByName("link");
let r8=document.querySelectorAll(`[name="link"]`);
console.log(r8);

//document.getElementById("div1");
let r9 = document.querySelector("#div1");  // querySelector uvek vraca objekat
console.log(r9);

let r10=document.querySelectorAll("#div1");  // querySelectorAll uvek vraca NodList-u, cak i kad se ta lista sastoji iz jednog elementa
console.log(r10);

let prviParagraf =document.querySelector("p"); //p:first-of-type
console.log(prviParagraf);

let prviDivSaKlasomError = document.querySelector(".error");
console.log(prviDivSaKlasomError);

let poslednjRedUTabeli = document.querySelector("table tr:last-child"); // ili  table tr:last-of-type
console.log(poslednjRedUTabeli);

let sviLinkovi = document.querySelectorAll("a");
console.log(sviLinkovi);

let slike= document.querySelectorAll("img");
console.log(slike);

slike.forEach(elem=>{
    console.log(elem);
});

for(let i=0;i<slike.length;i++){
    console.log(slike[i]);
}


//Menjanje elemenata iz HTML-a
console.log(r1.id);
console.log(r1.href);
console.log(r1.innerHTML);
r1.innerHTML="Sadrzaj div elemenata je tekst dodat iz javascripta"  //pregazimo stari sadrzaj iz html-a
//r1.innerHTML += "Sadrzaj div elemenata je tekst dodat iz javascripta" //dodamo na onaj iz htmla... otkomentarisi pa vidi

let prviLink = document.querySelector("a"); //dohvatimo prvi link u html-u
prviLink.href = "http://www.wikipedia.com";

prviLink.setAttribute("target", "_blank");
//prviLink.target = "_blank";
prviLink.setAttribute("href", "http://www.wikipedia.org");
prviLink.innerHTML = "Wikipedia";

// U CSS-u bi bilo------
//  a:first-child{
//  color:red;
//  background-color:ByteLengthQueuingStrategy;
//     }
prviLink.style.color="red";
prviLink.style.background = "blue";
prviLink.style.textDecoration = "none";
prviLink.style.border = "3px solid black";
//  ili
prviLink.style.borderWidth = "3px";
prviLink.style.borderStyle = "solid";
prviLink.style.borderColor = "black";
//

prviLink.setAttribute("style", "color:red; background-color:blue; text-decoration:NamedNodeMap; border : 3px solid black;")

r1.style.color = "green";

//Postaviti crveni border svim linkovima na stranici
r7.forEach(link=>{
    link.style.border = "3px solid red"
});

//Drugi nacin
let linkovi = document.getElementsByTagName("a");
for(let i =0; i< linkovi.length;i++){
    linkovi[i].style.border = "3px solid green";
}

//Selektovati sve paragrafe i u svakom od njih pridodati tekst "VAZNO"
let paragrafi = document.querySelectorAll("p");
paragrafi.forEach(paragraf=>{
    paragraf.innerHTML += "VAZNO";
});


//Svim divovima na stranici sa klasom "error" dodati po jedan naslov najvece velicine sa tekstom "Greska!".
 let errorDiv = document.querySelectorAll ("div.error");
 errorDiv.forEach(er=>{
     er.innerHTML += "<h1>Greska!</h1>";
 });


//Neka je n broj paragrafa u datom dokumentu. U svakom i -tom paragrafu dodati i**2, za svako i=1,2,... , n
for(let i=0; i<paragrafi.length;i++){
    paragrafi[i].innerHTML += (i+1)**2;
}

paragrafi.forEach((par, i) =>{
    par.innerHTML*= (i+1)**2;
});
//Svim slikama dodati alternativni tekst


//Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom

//Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju
