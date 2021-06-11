import {Film} from "./film.js"

let film1 = new Film ("Film1", "Reziser1", 2010, [9,7,9,8.2,6]);
let film2 = new Film ("Film2", "Reziser2", 1800,[9,9,9]);
let film3 = new Film ("Film3", "Reziser3", 1900, [1,1,2]);

let nizFilmova=[film1, film2, film3];
console.log(nizFilmova);

console.log(film1.ocene); //Vraca niz ocena
film1.ocene.forEach(o => {
    console.log(o);
});

console.log(film1.prosek());

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova =(niz, vek)=>{
niz.forEach(f=>{
    // film.godina//100  (celobrojno sa 100) ili Math.ceil(f.godina/100)
    if(Math.ceil(f.godinaIzdanja/100)==vek){
    //if( f.godinaIzdanja > (vek-1)*100  && f.godinaIzdanja<=vek*100){
        f.stampaj(); 
    }
});

}

vekFilmova(nizFilmova, 19);
 //////////////////////////////////////////////
//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća prosečnu ocenu svih filmova.

let prosecnaOcena = niz =>{
    let suma=0;
    let broj=0;
    niz.forEach(elem=>{ //elem je jedan film a elem.ocene je niz ocena
        elem.ocene.forEach(ocene => {
            suma+=ocene;
            broj+=1
        });
    });
    return suma/broj;
}
console.log(prosecnaOcena(nizFilmova));

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = niz =>{
    let najbolji=niz[0]; //cuva objekat
    niz.forEach(film=>{
        if(film.prosek()>najbolji.prosek()){
            najbolji=film;
        }
    });
    return najbolji;
}
console.log("Najbolje ocenjeni film");
najboljeOcenjeni(nizFilmova).stampaj();
console.log(najboljeOcenjeni(nizFilmova));

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz =>{
    let najbolji = najboljeOcenjeni(niz).ocene;
    let najslabijaOcena=najbolji[0];
    najbolji.forEach(o=>{
        if(o<najslabijaOcena){
            najslabijaOcena=o;
        }
    });
    return najslabijaOcena;
}
console.log(najmanjaOcenaNajboljeg(nizFilmova));


//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz =>{
    let min = niz[0].ocene[0];
    niz.forEach(elem=>{
       elem.ocene.forEach(o => {
           if(o<min){
               min=o;
           }
       });
    });
    return min
}
console.log(najmanjaOcena(nizFilmova));
//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

let iznadOcene = (ocena, niz)=>{
    let boljeOcenjeni = [];
    niz.forEach(film=>{
        if(film.prosek()>ocena){
            boljeOcenjeni.push(film);
        }
    });
    return boljeOcenjeni;
}
console.log(film1.prosek(), film2.prosek(), film3.prosek());
console.log(iznadOcene(7,nizFilmova));
    
 //Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
/*
npr.

 film1 =8,5
 film2 = 7

 globalni prosek =8

 film1 - globalni= 8,5-8= 0,5
 film2 - globalni=7-8= -1    zato cemo koristiti apsolutnu vrednost i gore i dole
 */

 let osrednjiFilm= niz=>{
    let najbliziObj = niz[0]; //pretpostavka da je prvi film(objekat) najblizi generalnom proseku
    let prosecnaGlobal = prosecnaOcena(niz);
    let najbliziRazlika= Math.abs(najbliziObj.prosek() - prosecnaGlobal);
    niz.forEach(f=>{
        let razlikaTekuceg =  Math.abs(f.prosek() - prosecnaGlobal); //Koliko se tekuci film razlikuje od globalne prosecne ocene
       if(najbliziRazlika > razlikaTekuceg){
           najbliziRazlika=razlikaTekuceg;
           najbliziObj=f;
       }
    });
    return najbliziObj;
 }

 nizFilmova.forEach(f=>{
    console.log(f.naslov, f.prosek());
 });
console.log("Osrednji film je: " + osrednjiFilm(nizFilmova).naslov);
 osrednjiFilm(nizFilmova).stampaj();

 