import {Knjiga} from "./knjiga.js";
let knjiga1 = new Knjiga("naslov1","autor1", 2004, 204, 500);
knjiga1.stampaj();
console.log(knjiga1.obimna());
console.log("Da li je knjiga obimna: " + knjiga1.obimna())
console.log(knjiga1.skupa());
console.log(`Ime autora je ${knjiga1.autor}; Da li je ime dugacko: ${knjiga1.dugackoIme()}`)

let knjiga2 = new Knjiga("Hajdi", "Johana Spiri", 1994, 304, 600);
let knjiga3 = new Knjiga("Orlovi rano lete", "Branko Copic", 2020, 186, 400);

let arrKnjige = [knjiga1, knjiga2, knjiga3];
console.log(arrKnjige);

//Ispis svih podataka iz niza arrKnjige
//1. nacin
arrKnjige.forEach(elem=>{
    elem.stampaj();
});

//2.nacin
for(let i =0;i<arrKnjige.length;i++){
    arrKnjige[i].stampaj();
}

//Kolika je ukupna cena svih knjiga
let ukupnaCena = (niz)=>{
    let suma=0;
    niz.forEach(k=>{
        suma+=k.cena; //k.cena je geter i pozivam ga bez zagrada
    });
    return suma;
}
console.log(ukupnaCena(arrKnjige));

//Prosecna cena knjiga
let prosecnaCena = niz =>{
    let suma=0
    niz.forEach(elem=>{
        suma+=elem.cena;
    });
    let prCe=suma/niz.length;
    return prCe;
}
console.log(prosecnaCena(arrKnjige));
////////////////////////////////////////////
let pC = niz=>{
    let ukupna = ukupnaCena(niz);
    let brKnjiga = niz.length;
    return ukupna / brKnjiga;
}
console.log(pC(arrKnjige));

//Kolika je prosecna cena stranice knjige
let prosecnaStranica = niz=>{
    let ukupna = ukupnaCena(niz);
    let ukupnoStranica=0;
    niz.forEach(elem=>{
        ukupnoStranica+=elem.brojStrana;
    });
    return ukupna/ ukupnoStranica;
}
console.log(prosecnaStranica(arrKnjige));
console.log("Jedna stranica knjige u proseku kosta: " + prosecnaStranica(arrKnjige));
