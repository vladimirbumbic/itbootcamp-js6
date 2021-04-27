let a = 5;

if(a > 0 && a < 10){ //KONJUNKCIJA (a>o) i (a<10)
    console.log("Oba logicka uslova su zadovoljena");
}
else{
    console.log("Barem jedan uslov nije zadovoljen");
}

let b = -5;

if((b < 0) || (b > 15)){ //DISJUNKCIJA (b<0) ili (b>15)
    console.log("Barem jedan uslov je zadovoljen");
}
else{
    console.log("Nijedan uslov nije zadovoljen");
}

let c = 3;

if(!(c < 0)){ //NEGACIJA 8nije c manje od nule) da je c < 0- nije, ali negacijom postaje da jeste
    console.log(`Broj ${c} je nenegativan`);
}
else{
    console.log(`Broj ${c} je negativan`);
}

let pol = "m";
let godine = 20;

if( pol == "m" && godine >= 18){
    console.log("Musko punoletan");
}
else if(pol == "m" && godine < 18){
    console.log("Musko maloletan");
}
else if(pol == "z" && godine >= 18){
    console.log("Zensko punoletan");
}
else{
    console.log("Zensko maloletan");
}

//21. zadatak
let x = 5;
let y = 7;
let z = 10;
if((x > y) && (x > z)){
    console.log(`Najveci je ${x}`);
}
else if((y > x) && (y > z)){
    console.log(`Najveci je ${y}`);
}
/*else if( (z > x) && (z > y)){
    console.log(`Najveci je ${z}`);
}
else{
    console.log("Svi brojevi su isti");
}
*/
else{
    console.log(`Najveci je ${z}`)
}

//22.zadatak
let t = 10;
if( (t < -15) || (t > 40) ){
    console.log("Ekstremna temperatura");
    document.body.innerHTML += `<p>Ekstremna temperatura</p>`;
}
if(t < -15){
    console.log("Ekstremna hladnoca");
}else if (t>40){
    console.log("Ekstremna toplota");
}else("Srednja temperatura");

//23.Zadatak
let date = new Date();
console.log(date);
let godina = date.getFullYear();
console.log(godina);

if( (godina % 4 == 0 && godina % 100 != 0) || (godina % 400 == 0)){
    console.log("Godina je prestupna");
}
else{
    console.log("Godina nije prestupna");
}