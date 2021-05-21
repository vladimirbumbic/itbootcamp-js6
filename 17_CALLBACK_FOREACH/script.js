function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div=document.getElementById("container");  //div nema veze sa divom iz htmla. Ovo je promenljiva koju smo mogli nazvati bilo kako
    //div.innerHTML=poruka;  ako se brise stari sadryaj diva
    div.innerHTML += poruka + "<br>";
}

function ispisNiza(niz, cb){
    let poruka = ""; //konkatenacija stringova
    for(let i= 0; i<niz.length;i++){
        poruka += niz[i] + " ";  //vidi bez navodnika
    }
    cb(poruka);  //poziv callback funkcije
}
let a =[5,-9,11,9,4];
let b=["Vuk", "Nikola", "Jelena", "Jelena", "Anita"];
ispisNiza(a, ispisKonzola);  // poziv funkcije ispisNiza
ispisNiza(a, ispisStranica); // poziv funkcije ispisNiza
ispisNiza(b, ispisKonzola);  // poziv funkcije ispisNiza
ispisNiza(b, ispisStranica); // poziv funkcije ispisNiza

//pozivi funkcije preko aninimnih callback funkcije

ispisNiza(a, parametar =>{  //arrow anonimna funkcija
    console.log(parametar);
});

ispisNiza(a, function(parametar){  //anonimna funkcija
    let div = document.getElementById("container");
    div.innerHTML += parametar + "<br>";
});


//forEach petlja

/////////////retko se koristi
function ispis(poruka){
    console.log(`Element niza je: ${poruka}`);
}

a.forEach(ispis);
/*
forEach petlja poziva callback funkciju za svaki element niza,
a prosledjuje taj element niza kao parametar callback funkciji
Na primer, za niz a =[5,-9,11,9,4];
a.forEach poziva:
ispis(5);
ispis(-9);
ispis(11);
ispis(9);
ispis(4);
*/
b.forEach(ispis);

////////////////////////////////
//Cesce se koristi

a.forEach(e => {
    console.log(`Element niza je : ${e}`)
});

b.forEach((e, i)=>{
    console.log(`Element ${e} sa indeksom ${i}`);
});

//Ispis elemenata niza sa parnim indeksom
b.forEach((e,i)=>{
    if(i%2==0){
        console.log(`Element ${e} ima paran indeks`);
    }
});

//2.Odrediti zbir elemenata celobrojnog niza.
a =[5,-9,11,9,4];
let zbirNiza = niz =>{
    let zbir=0;
    niz.forEach(elem =>{
        zbir += elem;
    });
    return zbir;
}
console.log(zbirNiza(a));

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
a =[5,-9,11,9,4];
let srVrNiza = niz =>{
    let srvr = 0;
    niz.forEach(elem => {
        srvr += elem;
    });
    srvr= srvr / niz.length;
    return srvr;
}
console.log(srVrNiza(a));

//5.Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxNiz=niz=>{
    let max = niz[0];
    niz.forEach(elem =>{
        if(elem > max){
            max = elem;
        }
    });
    return max;
}

let c =[15,7,8,15,0,9,15,0,2];
console.log(maxNiz(c));

/*
 Napisati funkciju koja vraca broj elemenata sa:
    -maksimalnom vrednoscu
    -minimalnom vrednoscu
*/
/*
let brojMaxNiz = niz =>{
    let max = maxNiz(niz);  //ovo je od onog gore
    let broj = 0;
    niz.forEach(elem =>{
        if(elem ==max){
            broj++;
        }
    });
    return broj;
}

let brojMinNiz = niz =>{
    let min = minNiz(niz);
    let broj = 0;
    niz.forEach(elem =>{
        if(elem==min){
            broj++;
        }
    });
    return broj;
}
*/

let brojSvojstvoNiz = (niz, callback) => {
    let s = callback(niz);
    let broj = 0;
    niz.forEach(elem =>{
        if(elem == s){
            broj++;
        }
    });
    return broj;
}

console.log("Broj elemenata sa maksimalnom vrednoscu je:" + brojSvojstvoNiz(c,maxNiz));  //maxNiz od gore 
//console.log("Broj elemenata sa minimalnom vrednoscu je:" + brojSvojstvoNiz(c,minNiz));

//16.
let kupovina=["hleb", "mleko", "jaja", "meso"];

let neuLista = niz=>{
    let lista=`<ul>`;
    niz.forEach(elem=>{
        lista+= `<li>${[elem]}</li>`;
    })
    lista +=`</ul>`;
    return lista;
}
document.body.innerHTML += neuLista(kupovina);

/*
let kupovina=["hleb", "mleko", "jaja", "meso"];
function li(niz){
    let lista=`<ul>`;
    niz.forEach(elem=>{
        lista+= `<li>${[elem]}</li>`;
    });
    lista+=`</ul>`;
    return lista;
}
document.body.innerHTML += li(kupovina);

*/

//17.
let imenaKK=["Pera", "Vlada", "Dragan", "Milos", "Nemanja"];
function tim(niz){
    let tabela=`<table>`;
    niz.forEach(elem=>{
        tabela+= `<tr><td>${elem}</td></tr>`;
    });
    tabela+= `<table>`;
    return tabela;
}
document.body.innerHTML += tim(imenaKK);

//18.
let slike =["1.jpg", "2.jpg", "3.jpg"];
function img(niz){
    niz.forEach(elem=>{
        document.body.innerHTML+= `<img src="${elem}">`
    });
}
img(slike);
//////////////////////////////////////////////////////
//20. callback funkcija
/*
U nizu stringova ispisati sve elemente koji imaju:
-maksimalnu duzinu
-minimalnu duzinu
*/

let imena =["Stefan" , "Nikola", "Djordje", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"];

let maxDuzinaNiza = niz => {
    let maxDuzina= niz[0].length;
    niz.forEach(elem=>{
        if(elem.length > maxDuzina){
            maxDuzina=elem.length;
        }
    });
    return maxDuzina;
}
console.log(maxDuzinaNiza(imena));

let ispisStringSvojstvo = (niz, svojstvo) =>{
    let md =svojstvo(niz); //md je 8 od gornje petlje
    niz.forEach(elem=>{
        if(elem.length ==md){ //koji su elementi duzine max(8), i min (3)
            console.log(elem); //dakle, vraca ovde
        }
    })
}


let minDuzinaNiza = niz =>{
    let minDuzina =niz[0].length;
    niz.forEach(elem=>{
        if(elem.length< minDuzina){
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstvo(imena, maxDuzinaNiza); // maxDuzinaNiza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza); // minDuzinaNiza je callback funkcija
//pozivamo funkciju ispis..., koja onda poziva funkcije maxDuzinaNiza/min
/*
ovo ne treba, obrisemo

let ispisStringMinDuzina = niz =>{
    let md = minDuzinaNiza(niz);
    niz.forEach(elem=>{
        if(elem.length==md){
            console.log(elem);
        }
    })
}
ispisStringMinDuzina(imena);
*/

//24.
let zad24a = (a,b)=>{  //dva niza-a i b
    let n =a.length;  //let n = b.length... svejedno, jer su nizovi iste duzine
    let c=[];
    for(let i =0; i<n; i++){
        c.push(a[i]);  //push dodaje novi element na kraj niza
        c.push(b[i]);
    }
    return c;
}
a=[4, -9, 4, 1];
b=[8,8,1,0];
c=zad24a(a,b);
console.log(c);

let zad24b=(a,b)=>{
    let n= a.length;
    let c=[];
    for(let i=0;i<n;i++){
        c[2*i]=a[i];
        c[2*i + 1]= b[i];
    }
    return c;
}
c=zad24b(a,b);
console.log(c);

let zad24c=(a,b)=>{
    let n=a.length;
    let c=[];
    let j=0;
    for(let i =0; i<n; i++){
        c[j++]= a[i];
        c[j++]=b[i];
    }
    return c;
}
c=zad24c(a,b);
console.log(c);

//25.
let zad25 =(a,b)=>{
    let n=a.length;
    let c=[];
    for(let i =0;i<n;i++){
        c[i] =a[i] * b[i];
    }
    return c;
}


//26.
let zad26 =a=>{
    let n=a.length; // n je paran broj
    let b=[];
    for(let i=0; i<n/2;i++){
        b[i]=(a[i] + a[n-1-i])/2;
    }
}