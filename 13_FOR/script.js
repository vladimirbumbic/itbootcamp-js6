for (let i = 1; i <=5; i++){
    console.log(`Na redu je broj ${i}`);
}
//console.log(`Vrednost promenljive i jednaka je ${i}`); //nista zato sto je let u okviru petlje, ne let = 1, pa onda for....
//obrisi let i vidi onda-- rez je 6 jer i =6 po difoltu uzme kao da je var

//SCOPE (OBLAST VAZENJA)
//let (oblast vazenja unutar bloka (sve sto je unutar viticastih zagrada) u kojem je deklarisan)
//var (oblast vazenja unutar funkcije(za sada za ceo program, za ceo kod, dok ne uvedemo funkcije))
/*
    let i;  globalna promenljiva za ceo js fajl
    var j;  --II--

    if(i != j){
        let k;   lokalna promenljiva samo unutar if-a
        var m;   globalna za ceo js fajl
    }
*/


//3. Ispisati parne brojeve od 1 do 20 
//prvi nacin
for(let i = 1; i <= 20; i++){
    if(i % 2==0){
        console.log(i);
    }
}

//drugi nacin            i+=2
for(let i = 2; i <=20; i = i + 2){
    console.log(i);
}
//ispisati neparne od 1 do 20
for(let i = 1; i <=20; i = i + 2){ // ovde je i 1, pa tamo +2 uvek ide u neparan
    console.log(i);
}

//1.Ispisati brojeve od 1 do 20 
for(let i = 1; i <= 20; i++){
    console.log(i);
}

//2.Ispisati brojeve od 20 do 1 
for(let i = 20; i >= 1; i-=1){
    console.log(i);
}

//4.Ispisati dvostruku vrednost brojeva od 5 do 15
for(let i = 5; i<= 15 ;i++){
    console.log(i*2);
}

//5.Odrediti sumu brojeva od 1 do n
let i = 1;
let n = 8;
let suma = 0;
for(i=1; i<= n ;i++){
    suma += i;
}
console.log(suma);

//6.drediti sumu brojeva od n do m
n= 2;
let m = 5;
suma = 0;
for(n=2; n<=m ;n++){
    suma += n;
}
console.log(suma);

//7.Odrediti proizvod brojeva od n do m
n = 5;
m = 8;
let p = 1;
for(n=5; n<=m ;n++){
    p *= n;
}
console.log(p);

//8.Odrediti sumu kvadrata brojeva od n do m
n = 2;
m = 5;
suma = 0;
for(n=2; n<=5 ;n++){
    suma += n**2; //ili n*n
}
console.log(suma);

//9. zadatak   //ostaci pri deljenju sa 3
 let x = 8
for(let i = 1; i<=x; i++){
    if(i % 3== 1){
        document.body.innerHTML += "<img src='1.jpg'>";
    }
    else if(i % 3 == 2){
        document.body.innerHTML += "<img src='2.jpg'>";
    }
    else{
        document.body.innerHTML += "<img src='3.jpg'>";
    }
}


/*n =8;
for(let i = 0; i <= n - 1; i++){
    let k = i % 3; // k=0, 1 ,2, 0,1 ,2, 0...
    document.body.innerHTML += `<img src="${k+1}.jpg>;` //zato sto k ide od nule
}
*/
//10.Zadatak
//prvi nacin
let proizvod11 = 1;
for(let i = 20; i <=100; i++){
    if(i % 11 == 0){
        proizvod11 *= i;
    }
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je ${proizvod11}`);

//drugi nacin
proizvod11 = 1;
for( let i =22; i<=100; i+=11){
    proizvod11 *=i;
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je ${proizvod11}`);


//11Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

n = 5;
m = 150;
let brDeljivih = 0;
for(n= 5; n<= m; n++){
    if(n % 13 == 0){
        brDeljivih++
    }
}
console.log(`Broj delilaca intervala od n do m sa 13 je ${brDeljivih}`);
//12.zadatak
//prvi nacin
n = 2;
m = 8;
let suma1 = 0;
let broj = 0;
for(i = n; i<=m; i++){
    suma1+= i;
    broj++;
}
let arsr = suma1 / broj;
console.log(arsr);

//drugi nacin
n = 2;
m = 5; //Broj brojeva izmedju n i m jednak je  m - n + 1
arsr = 0;
for(i=n; i<=m; i++){
    arsr += i;
}
arsr /= (m - n + 1); //arsr = arsr/(m-n+1)
console.log(arsr);

//15.Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n = 2;
m = 15;
suma = 0;
let prebrojati = 0;
for(n=2; n<=m; n++){
    if(n % 10 == 4){ //(n %10==4 || n %10 == -4) ukoliko stavimo da je n negativan broj (n= -2)
        suma +=n;
        prebrojati++;
    }
}
console.log(suma);
console.log(prebrojati);

//16.Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 6;
m = 12;
suma = 0;
let a = 2;
for(i=n; i<=m; i++){
    if(i % a != 0){
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`)
//13.Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -10;
m = 20;
let brPoz = 0;
let brNeg = 0;
for(n=-10; n<=m; n++){
    if(n>0){
        brPoz++;
    }
    else if(n<0){
        brNeg++;
    }
}
console.log(`Broj pozitivnih je ${brPoz}, a broj negativnih ${brNeg}`);

//14.
n=5;
m=10;
let brDel = 0;
for(n=5; n<=m;n++){
    if((n%3== 0) || (n%5==0)){
        brDel++; 
    }
}
console.log(`${brDel}`);

//17.zadatak
n=10;
m=25;
a=5;
let proiz = 1;
for(n=10; n<=m; n++){
if(n%a ==0){
    proiz *=n;}
}
console.log(`${proiz}`);

//18.zadatak
/*Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
*/
/*
<table>
    <tr>
        <td>tekst</td>
        <td>tekst</td>
    </tr>
    <tr>
        <td>tekst</td>
        <td>tekst</td>
    </tr>
    <tr>
        <td>tekst</td>
        <td>tekst</td>
    </tr>
</table>
*/
//prvi nacin
let redovi = 6;
let tabela = `<table>`;
for(i=1; i<=redovi; i++){ // i crta redove-1,2,3,4,5,6
    if(i % 2 == 0){ // ako je i paran broj- if treba zbog klasa i bojenja
    tabela += `<tr class="boja1">`;
}
else{
    tabela += `<tr class="boja2">`
}
tabela +=
`
        <td>tekst</td>
        <td>tekst</td>
    </tr>   
    `;
    }
tabela += `</table>`;
document.body.innerHTML += tabela;

////////////////////////////////////

let element = document.getElementById("naslov");
element.innerHTML += "*****"; //da stoji samo = stajale bi samo zvezdice, prelepilo bi For petlja
//element.innerHTML = "*****" + element.innerHTML --da zvezdice stavimo ispred- For petlja(teksta u elementu)

/////////////////

//drugi nacin 18. zadatak

let htmlTabela = document.getElementById("mojaTabela");
for(i=1; i<=redovi; i++){
    htmlTabela.innerHTML +=
    `
        <tr>
            <td class="boja1">Tekst</td>
            <td>Tekst</td>
        </tr>
    
    
    `
}

//19.zadatak
/*Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
*/
let brLI = 10;
let lista = `<ul>`;
for(i=1; i<=brLI; i++){
    lista += `<li> Element ${i}`;
    if(i % 3== 2){
        i++;
        lista +=
        `
        <ul>
            <li class="ljubicasti">Element ${i}</li>
        </ul>
        `;

    }
    lista += `</li>`
}
lista += `</ul>`;
document.body.innerHTML += lista;

let lista1 = `<ul>`;
for(i=1; i<=brLI; i++){
    if(i % 3 == 0){
        lista1 +=
        `
            <ul>
                <li class="ljubicasti">Element ${i}</li>
            </ul>
        `;
    }
    else{
        lista1 += `<li>Element ${i}</li>`
    }
}
lista1 +=`</ul>`;
document.body.innerHTML += lista1;

//20.zadatak
let brSpan = 64;
for(i= 1; i<= brSpan; i++){
    document.body.innerHTML += `<span>${i}</span>`;
    if(i % 8 == 0){
        document.body.innerHTML += `<br>`;
    }
}


    
    
