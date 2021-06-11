import {Pacijent} from "./pacijenti.js";

let p1 = new Pacijent ("Ime jedan", 180, 80);
let p2 = new Pacijent ("Ime dva", 190, 90);
let p3 = new Pacijent ("Ime tri", 200, 100);

let nizPacijenata = [p1,p2,p3];
console.log(nizPacijenata);

let najmanjaTezina = niz =>{
let min = niz[0].tezina;
niz.forEach(elem => {
    if(elem.tezina<min){
        min=elem.tezina;
        
    }
});
return min
}
console.log(najmanjaTezina(nizPacijenata));