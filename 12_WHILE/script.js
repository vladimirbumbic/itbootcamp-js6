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
console.log(x); //ispisace 21

//u istom redu da ispise brojeve
let res =""; //string prazan
i = 1;
while(i <= 20){
    res = res + i + " "; //res+= (i + " ") racuna s desna na levo
    i++;
}
console.log(res);


//2.zadatak
i = 20;
while (i >= 1){
    console.log(i);
    i--;
}
//console.log(i); da je ovde napisano izbacilo bi nulu u konzoli u brauzeru
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

document.body.innerHTML += `<h1>While petlja</h1>`;
i = 1;
let n = 15;
while( i <= n){
    /*
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    5 % 3 = 2
    */
   if( i % 3 == 1){
    document.body.innerHTML += `<p style ="color: red;">Ovo je ${i}. paragraf</p>`;
   }
   else if(i % 3 == 2){
    document.body.innerHTML += `<p style ="color: green;">Ovo je ${i}. paragraf</p>`;
   }
   else{  //ili else if (i % 3 == 0) itd...
    document.body.innerHTML += `<p style ="color: blue;">Ovo je ${i}. paragraf</p>`;
   }

    i += 1; //bez ovog bi upalo u beskonacnu pelju, jer bi stalno pitalo da li je 1 <= 15
} 

//5.zadatak
//ako imamo samo jednu sliku

i = 1;
n = 6;
while( i <= n ){
    /*
    zato sto idu dva okvira
    1 % 2 = 1   
    2 % 2 = 0
    3 % 2 = 1
    4 % 2 = 0
    5 % 2 = 1
    */
   if(i % 2 == 1){
    document.body.innerHTML += `<img src="pelota.jpg" class="okvir1">`;
   }
   else{
    document.body.innerHTML += `<img src="pelota.jpg" class="okvir2">`;
   }
    i += 1 // i = i + 1;
}

//ako imamo razlicite slike, u ovom slicaju 3 slike
//Ciklicno prikazivanje slike-------------
i = 1;
n = 7;
while( i <= n){
    /*
    1 % 3 = 1    ovde 2
    2 % 3 = 2    ovde 3
    3 % 3 = 0   zato sto su slike 1 2 3, umesto 0 stavimo 1, a
    4 % 3 = 1
    5 % 3 = 2
    6 % 3 = 0     ili prosto sliku 3.jpg promenimo u 0.jpg, sto cemo i uraditi
    7 % 3 = 1
    */
   let ost = i % 3; //ost generise ovo gore
   document.body.innerHTML += `<img src="slike/${ost}.jpg">` //ost+1 ukoliko bi slika ostala 3.jpg
   i += 1;
}

   /* moze i ovako i jos im stavimo okvir dodajuci klasu i dodamo poseban stil.css i linkujemo
   if (i%3==1){
    document.body.innerHTML += `<img src="slike/1.jpg" class="okvir1">`
   }
   else if (i%3==2){
    document.body.innerHTML += `<img src="slike/2.jpg">`
   }
   else{
    document.body.innerHTML += `<img src="slike/0.jpg">`
   }*/


//6. Odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0;  //neutral za sabiranje, 1(jedan) je kod mnozenja--sabiranje i mnozenje a da ispadne isti broj

n = 100
while(i <= n){
    suma += i;
    i += 1;
    console.log(suma);
}
console.log(suma); // da smo ovo stavili unutar while-a{} napisao bi svaku sumu - 1 3 6 10 15 21...

// 1, 2, 3, 4, 5 --> 5*(5+1) / 2
//Formula za sumiranje brojeva iskljucivo od 1 do N
let suma1 = ( n * (n + 1)) / 2;
console.log(suma1);

/*
Odrediti proizvod brojeva od 1 do 5
*/
i = 1;
let proizvod = 1; //neutral za mnozenje je jedan
n = 5;
while(i <= n){
    proizvod *= i; //na svaki prethodni proizvod pomnozi
    i += 1;
}
console.log(proizvod);

//7.Odrediti sumu brojeva od 1 do n
i = 1;
n = 10;
let suma2 = 0;
while( i <= n){
    suma2 += i;
    i += 1;
}
console.log(suma2);

//8.zadatak
n = 2;
m = 5;
let suma3 = 0;
while( n <= m){
    suma3 += n;
    n += 1;
}
console.log(suma3);

//9. zadatak
n = 2;
m = 4;
let proizvod1 = 1;
while(n <= m){
    proizvod1 *= n;
    n += 1;
}
console.log(proizvod1);

//10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 2;
m = 5;
suma5 = 0;
suma6 = 0;
while(n <= m){
        if(n % 2 == 0){
            suma5 += n**2;
        }
        else{
            suma6 += n**3;
        }
    n += 1;
}
console.log(suma5);
console.log(suma6);



//11.zadatak
/*
let k = 10;
1, 2, 5, 10
ispisacemo 4 jer je 10 deljiv sa 4 broja

1 da
2 da
3 ne
4 ne
5 da
6 ne
7 ne
8 ne
9 ne
10 da
*/
let k = 10;
let brDeljivih = 0;
i = 1;

while( i <= k){
    //Proveravamo da li je k deljiv sa i
    if( k % i == 0){
        brDeljivih++  // brDeljivih += 1
    }
    i += 1;
}
console.log(brDeljivih);

//12.zadatak
//prakticno se svodi na prethodni zadatak ako je broj delilaca jednak 2, to znaci da je broj prost, tj. deljiv samo samim sobom i brojem jedan, u suprotnom, broj nije prost

if(brDeljivih == 2){
    console.log("Broj je prost");
}
else{
    console.log("Broj nije prost");
}

//drugi nacin-- da li je N prost, tj. deljiv samo sa 1 i samim sobom
n = 15;   //1 2 3 5 15   // za 20 su 1 2 5 10 20
i = 2;  //za proste brojeve od 2, jer je 1 deljivo sa svakim brojem
while (i <= n/2){
    if(n % i == 0){              //da li je n deljiv sa i
        console.log(`Broj ${n} nije prost`) //jer ako je 2 deljivo sa npr. 20, znaci da nije prost broj
        break; //Prekida izvrsenje petlje u kojoj se nasao //probaj break da zakomentarises i proveri kako izgleda
    }
    i++
}
if(i > n/2){ //"Ako nismo usli u  if unutar while-a" onda ide i>n/2
    console.log(`Broj ${n} je prost`);
}
//15 je broj cija se parnost ispituje
//2 je brojac koji ide po potencijalnim deliocima broja n

//treci nacin    prime znaci prost
n = 24;
i = 2;
let prime =true; //pretpostavimo da je broj prost
while(prime && (i <= n/2)){
    if(n % i == 0){
        prime = false;
    }
    i++;
}
if(prime){
    console.log(`Broj ${n} je prost`);
}
else{
    console.log(`Broj ${n} nije prost`);
}
//break i prime u ova dva nacina su u sustini isto...
