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

//Prolazak kroz elemente HTMLCollection for petljom
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
//r1.innerHTML += "Sadrzaj div elemenata je tekst dodat iz javascripta" //dodamo na onaj iz htmla...

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

prviLink.setAttribute("style", "color:red; background-color:blue; text-decoration:none; border : 3px solid black;")

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
let paragrafi = document.querySelectorAll ("p");
paragrafi.forEach(p=>{
    p.innerHTML += " VAZNO";
})

//Svim divovima na stranici sa klasom "error" dodati po jedan naslov najvece velicine sa tekstom "Greska!".
 let errorDiv = document.querySelectorAll ("div.error");
 errorDiv.forEach(er=>{
     er.innerHTML += "<h1>Greska!</h1>";
 });


//Neka je n broj paragrafa u datom dokumentu. U svakom i -tom paragrafu dodati i**2, za svako i=1,2,... , n
for(let i=0; i<paragrafi.length;i++){
    paragrafi[i].innerHTML += (i+1)**2;
}
/*
paragrafi.forEach((par, i) =>{
    par.innerHTML*= (i+1)**2;
});*/
//Svim slikama dodati alternativni tekst
slike=document.querySelectorAll("img");
slike.forEach(sl=>{
    sl.alt+= "avioni";
});

//Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
paragrafi.forEach(boja=>{
    boja.style.color="purple";
});

//Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju
for(let i=0;i<paragrafi.length;i++){
    if(i%2==0){
        paragrafi[i].setAttribute("style","background-color:green");
    }
    else{
        paragrafi[i].setAttribute("style","background-color:red");
    }
}
///////////////////////////////////
/*paragrafi.forEach((elem, i) =>{
    if(i%2==0){
        elem.setAttribute("style","background-color:green");
    }
    else{
        elem.setAttribute("style","background-color:red");
    }
});*/

//7.
r7 = document.querySelectorAll("a");
r7.forEach((elem, i)=>{
    elem.setAttribute("style", "padding:5px; font-size:18px; text-decoration:none;");
    if(i%2==0){
        elem.style.color="purple";
        elem.style.backgroundColor="green";
    }
    else{
        elem.style.color="white";
        elem.style.backgroundColor="blue";
    }
});

//8.
slike= document.querySelectorAll("img");
slike.forEach(s=>{
    if(s.src.includes(".png")){ // (s.src.includes(".PNG")
        s.style.border="2px solid red"
    }
});
///////////////////////////////////////////////////
/*let slike2=document.querySelectorAll(`img[src*=".png"]`); // *= znaci da sadrzi
slike2.forEach(s=>{
    s.style.border="2px solid red"
});
*/ 

//9.
sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(link=>{
    if(link.target == "_blank"){
        link.target = "_top";
    }
    else{
        link.target="_blank";
    }
});

//10.
let imena =[ "Stefan", "Mladen", "Jelena", "Stefan Dj"];
imena.forEach(ime=>{
   if(ime[0]=="S"){ // if(ime.startsWith("S"))
       document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
   }
   else{
    document.body.innerHTML += `<a href="#">${ime}</a>`;
   }
});
////////////////////////////////////
let result = "<ul>";
imena.forEach((ime, i)=>{
    if(i%2==0){
        result+= `<li style="color:blue"> ${ime}</li>`;
    }
    else{
        result+= `<li style="color:red"> ${ime}</li>`;
    }
});
result += "</ul>";
document.body.innerHTML += result;
//////////////////////////////////////

let tabela ="<table>";
imena.forEach(ime=>{
    tabela += `<tr><td>${ime}</td></tr>`;
});
tabela += "</table>";
document.body.innerHTML += tabela;

/////////////////////////////////////////////////////////////////

//Dohvatanje roditeljskog cvora
sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link => {
    console.log(link.parentNode);
    link.parentNode.style.border="2px solid red";
});

//Dohvatanje deteta nekog cvora
let prviDiv = document.querySelector("div.container");
console.log(prviDiv.childNodes[1]);
prviDiv.childNodes.forEach(child=>{
    console.log(child);
});

let n = prviDiv.childNodes.length;
for(let i=0;i<n;i++){
    console.log(prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1];
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);

link1.nextSibling.nextSibling.style.fontSize="90px";

///////////////////////////////
//1.
paragrafi.forEach((elem,i)=>{
    if(i%2==0){
        elem.classList.add("error");
    }
    else{
        elem.classList.add("success");
    }
});

//2.
paragrafi = document.querySelectorAll ("p");
paragrafi.forEach(p=>{
    if(p.textContent.includes("error")){ //ili p.innerHTML.includes...
        p.classList.add("error");
    }
    if(p.textContent.includes("success")){
        p.classList.add("sucess");
    }
});
//3.
paragrafi = document.querySelectorAll ("p");
paragrafi.forEach(p=>{
        p.classList.toggle("error");
});

//4.Tekst u paragrafima naizmenicno pisati velicinom...
paragrafi.forEach((p,i)=>{
    if(i%3==0){
        p.style.fontSize="15px";
    }
    else if(i%3==1){
        p.style.fontSize="20px";
    }
    else if(i%3==0){
        p.style.fontSize="25px";
    }
});

//////////////////////////////////////

let noviParagraf=document.createElement("p");
noviParagraf.classList.add("klasa");
noviParagraf.id="aj-di";
noviParagraf.innerHTML="Tekst novog paragrafa";//ne vidi se nigde trenutno

let noviDiv =document.getElementById("div2");
noviDiv.appendChild(noviParagraf); //dodamo ga
// document.body.appendChild(noviParagraf);

let noviLink=document.createElement("a");
noviLink.textContent="Klikni me";
noviLink.href="http://www.google.com";
noviParagraf.appendChild(noviLink);
//noviParagraf.removeChild(noviLink);

//noviDiv.innerHTML += `<p class="klasa" id="aj-di">Tekst novog paragrafa</p>`; //ukoliko ne zelimo da se vracamo vise ovde ovoj klasi
