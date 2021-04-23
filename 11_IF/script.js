console.log("IF - naredba grananja")

let a = 7;
let b = 10;

if(a < b){
    console.log("a je manje od b")
} 

console.log("If je izvrsen"); //ako je false(npr. -a- da bude 77), ispisace samo ovu komandu

let x = 15;
let y = 15;
if(x == y){
    console.log("Brojevi x i y su jednaki") /*"Brojevi x = " + x + i y = " + y + " su jednaki"  */
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`);
}

let x1 = "15";  //nije ispisalo zato sto je x 15 broj, a x1 je string
if(x == x1){
    console.log(`Brojevi x i x1 imaju istu vrednost`);
}

if(x ===x1){
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost`);
    //x i x1 imaju isto vrednost to je 15, ali nemaju isti tip. x je tipa number, a x1 tipa string
}


