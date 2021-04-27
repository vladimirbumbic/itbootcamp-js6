//Ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while(i <= 5){
    console.log(i);
    i++
}
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);

//1.zadatak
let x = 1;
while (x <= 20){
    console.log(x);
    x++
}
//u istom redu
let res =""; //string prazan
i = 1;
while(i <= 20){
    res = res + i + " "; //res+= (i + " ") racuna s desna na levo
    i++;
}
console.log(res);


//2.zadatak
let y = 20;
while (y >= 1){
    console.log(y);
    y--
}
//2.nacin
/*
i = 1;
while(i <= 20){
console.log(21-i);
    i++
}
*/

//3.zadatak
let ze = 1;
while(ze <= 20){
    if(ze % 2 == 0){
        console.log(ze);
    }
    ze++
}
//drugi nacin
/*i = 1
while( i<=10){
    console.log(2*i);
i++
}
*/

//treci nacin
/* 
i=2;
while (i <=20){
    console.log(i);
    i = i + 2;   isto je kao-- i+=2
}

*/


//4.zadatak
