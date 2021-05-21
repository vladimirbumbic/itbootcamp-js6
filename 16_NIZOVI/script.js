let voce = ["jagoda", "jabuka", "malina", "ananas", "breskva", 8];
console.log(voce);
console.log(voce[2]);

voce[2] = "tresnja";
console.log(voce);

// Ispis elemenata niza
console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza koriscenjem petlje
/*for(let i =0; i<3 ;i++){
    console.log(voce[i]);
}*/
for(let i =0; i<voce.length ;i++){  //posle dodamo ananas i breskva
    console.log(voce[i]);
}
console.log(voce.length); // Broj elemenata niza

voce = ["kajsija", "dunja", "visnja"];
console.log(voce);
voce = 10;
console.log(voce);

const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);
povrce[0] = "tikva";
console.log(povrce);

//povrce = ["grasak", "pasulj"];  // ne mogu ponovo da dodeljujem vrednost const varijabli, ali elemente u njoj mozemo(tikva) 

let razno = [3, -15.5, "bla bla bla", ["a","b","c"]];
console.log(razno);

//2.Odrediti zbir elemenata celobrojnog niza.
let brojevi = [15,14,36,12,18];
let suma = 0;
for(let i =0;i<brojevi.length;i++){
    suma += brojevi[i];
    //console.log(brojevi[i]);
    //suma += i  bi sabralo njihove indekse, dakle 0+1+2+3+4 = 10
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
let niz =[1,2,3,4,5];
let proizvod = 1;
for(let i =0; i< niz.length;i++){
    proizvod *= niz[i];
}
console.log(proizvod);

//4.Odrediti srednju vrednost elemenata celobrojnog niza.
let srvr = [1,2,3,4,5];
let broj = 0;
let zbir = 0;
for(let i = 0; i< srvr.length;i++){
    broj += 1;
    zbir += srvr[i];
}
let arsr = zbir/broj;
console.log(arsr);
//console.log(zbir/ broj);

//funkcija ovoga
let aritmeticka = prosledjujemNiz => {
    let suma = 0;
    let broj = 0;
    for(let i =0; i< prosledjujemNiz.length; i++){
        suma += prosledjujemNiz[i];
        broj += 1;
    }
    return suma/ broj;
}
console.log(aritmeticka([2,3,4,5]));
console.log(aritmeticka([-4,10,3]));
console.log(aritmeticka(brojevi));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
//nas niz se zove "brojevi" iz drugog zadatka
brojevi = [15,14,36,12,18];

let maksVr = brojevi[0];
for(let i =0; i< brojevi.length;i++){
    if(maksVr < brojevi[i]){
        maksVr = brojevi[i];
    }
}
console.log(maksVr);

/*let br1 = 5;
let br2 = 15;
let br3 = 7;

let maks = br1;
if(maks < br2){
    maks = br2;
}
if(maks<br3){
    maks=br3;
}*/

//7. Odrediti indeks maksimalnog elementa celobrojnog niza
//1. nacin
brojevi = [15,14,36,12,18];
let indeks = 0;
for(let i = 0; i< brojevi.length;i++){
    if(maksVr ==brojevi[i]) {
        indeks = i;
        break;  // kad zakomentarisemo "break" probaj sa let brojevi = [15,14,36,12,18,36,14,36]; ispisace 7, tj poslednji broj, a sa brejkom ispisuje prvi indeks maksimalnog broja
    }
}
console.log(indeks); // 2, tj broj 36 od "brojevi"

//2. nacin
brojevi = [15,14,36,12,18];
let maksVrednost = brojevi[0];
let maksIndeks = 0;
for(let i=0; i< brojevi.length; i++){
    if(brojevi[i] > maksVrednost){  // >= daje poslednji indeks, dok > daje prvi indeks
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);

//6.Odrediti minimalnu vrednost u celobrojnom nizu.
brojevi = [15,14,36,12,18];
let minVr = brojevi[0];
for(let i =0; i< brojevi.length;i++){
    if(minVr > brojevi[i]){
        minVr = brojevi[i];
    }
}
console.log(minVr);

//8.Odrediti indeks minimalnog elementa celobrojnog niza.
brojevi = [15,14,36,12,18];
let indeks2 = 0;
for(let i = 0; i< brojevi.length;i++){
    if(minVr ==brojevi[i]) {
        indeks2 = i;
        break;
    }
}
console.log(indeks2);

//9.Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
//arsr je 3
let brojevi2 = [2,4,5,7,9];
let brojac = 0;
for(let i =0; i< brojevi2.length; i++){
    if(brojevi2[i] > arsr){
        brojac+=1;
    }
}
console.log(brojac);

//10. Izracunati zbir pozitivnih elemenata celobrojnog niza
brojevi2 = [1,2,3,4,-5];
let zzbir = 0;
for(let i = 0;i< brojevi2.length;i++){
    if(brojevi2[i]>0){
        zzbir += brojevi2[i];
    }
}
console.log(zzbir);

//11. Odrediti broj parnih elemenata u celobrojnom nizu
brojevi2 = [1,2,3,4,-5];
brojac=0;
for(let i = 0;i< brojevi2.length;i++){
    if(brojevi2[i] % 2 == 0){
        brojac+=1;
    }
}
console.log(brojac);

//12.Odrediti broj parnih elemenata sa neparnim indeksom.
let nizBrojeva =[10,16,15,17,12,-14];
let brElem = 0;

for(let i =0; i< nizBrojeva.length;i++){
    // element- nizBrojeva[i] - 10,16,15...
    // indeks- i - 0,1,2...
    if(nizBrojeva[i] % 2==0 && i %2!=0){
        brElem+=1;
    }
}
console.log(brElem); // 10 je paran i indeks je 0, ne moze
                     //-14 je paran, njegov indeks je 5, dakle moze, kao i 16- indeks 1

let a = 5;
a*=(-1);
//a = -a;  //a=a*(-1);  promena znaka
console.log(a);

//13.Izračunati sumu elemenata niza sa parnim indeksom.
nizBrojeva =[10,16,15,17,12,-14];
suma = 0;
for(let i =0;i<nizBrojeva.length;i++){
    if(i%2==0){
        suma+= nizBrojeva[i];
    }
}
console.log(suma);

//14.Promeniti znak svakom elementu celobrojnog niza.
nizBrojeva =[10,16,15,17,12,-14];
//nizBrojeva[0]=-nizBrojeva[0];
//console.log(nizBrojeva[0])
for(let i=0; i<nizBrojeva.length;i++){
    nizBrojeva[i]= -nizBrojeva[i]
}
console.log(nizBrojeva);

nizBrojeva =[10,16,15,17,12,-14];
for(let i=0; i<nizBrojeva.length;i++){
    nizBrojeva[i] *= -1;
    console.log(nizBrojeva[i]);
}


//15.Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
nizBrojeva =[11,13,-15];
for(let i=0;i<nizBrojeva.length;i++){
    if(nizBrojeva[i] %2==1 && i%2==0){ //==1 не ради кад је елемент негативан (-15)
        nizBrojeva[i] *= -1;
    }
}
console.log(nizBrojeva);

nizBrojeva =[11,13,-15];
for(let i=0;i<nizBrojeva.length;i++){
    if(nizBrojeva[i]%2 !=0 && i%2==0){
        nizBrojeva[i] *= -1;
        //console.log(nizBrojeva[i]);
    }
}
console.log(nizBrojeva);

//16.Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let namirnice =["krema", "voce", "povrce", "mleko", "jaja"];
namirnice[0]= "sok";
let lista = `<ul>`;
for(let i = 0;i<namirnice.length;i++){
    lista += `<li>${namirnice[i]}</li>`;
}
lista += `</ul>`;

namirnice[0] = "hleba"; //nije ispisao jer je vec u promenljivu lista dodao vrednost "sok"

document.body.innerHTML+= lista;

//17.Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let imena =["Petar", "Marko", "Janko", "Vladimir", "Dragan", "Petar"];
let tabela =`<table>`;
for(let i =0;i< imena.length;i++){
    tabela += `<tr><td> ${imena[i]}</td></tr>`;
}
tabela += `</tabela>`;
document.body.innerHTML+= tabela;

//18.Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike =[`<img src="images/1.jpg">`,`<img src="images/2.jpg">`,`<img src="images/3.jpg">`];
for(let i =0;i<slike.length;i++){
    document.body.innerHTML += `${slike[i]}`;
}
//
/*let slike = ["1.png", "2.png", "3,png"];
for(let i=0; i< slike.length; i++){
    document.body.innerHTML += `<img src="${slike[i]}>`;
}
*/
/////////////
/*
let stringovi=["1.jpg","2.jpg","3.jpg"];
let slika="";
for(let i =0;i<stringovi.length;i++){
    slika+=`<img src="${stringovi[i]}">`;
}
document.body.innerHTML += slika;
*/

//////////////////////////////////
let rec = "abcdefg !  ?";
console.log(rec.length);
console.log(rec[0]);
console.log(rec[5]);
for(let i = 0; i< rec.length;i++){
    console.log(rec[i]);
}
///////////////////////////////
//19.Ispisati dužinu svakog elementa u nizu stringova. 
let element = ["jedan", "dva", "tri", "cetiri", "pet"];
    for(let i=0; i< element.length;i++){
        console.log(element[i].length);
}

//20.Odrediti element u nizu stringova sa najvećom dužinom.
element = ["jedan", "dva", "tri", "cetiri", "pet"];
let najvecaDuzina = element[0].length;
let ime = element[0];
for(let i = 0;i<element.length;i++){
    if(najvecaDuzina< element[i].length){
        najvecaDuzina = element[i].length;
        ime=element[i];
    }
}
console.log(najvecaDuzina);
console.log(ime);

//21.Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
element = ["jedan", "dva", "tri", "cetiri", "pet"];
broj=0;
suma=0;
for(let i =0;i<element.length;i++){
    suma+=element[i].length;
    broj+=1;
}
arsr=suma/broj;
console.log(arsr);

let broj2=0;
for(let i =0;i<element.length;i++){
    if(element[i].length > arsr){
        broj2+=1;
    }
}
console.log(broj2);

/*
let stringovi3 =["Ana", "Milica", "Jelena"];
let sumaDuzina=0;
for(let i = 0;i<stringovi3.length;i++){
    sumaDuzina+= stringovi3[i].length;
}
let arSrDuzina = sumaDuzina /stringovi3.length;
console.log(arSrDuzina);

let brNatprosecnih=0;
for(let i = 0;i<stringovi3.length;i++){
    if(stringovi3[i].length >arSrDuzina){
        brNatprosecnih+=1;
    }
}
console.log(brNatprosecnih);
*/
//22.Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
//Prvi nacin
let stringovi=["Milos", "Milan", "Goran", "Aleksandar"];

//rec.includes("a") vraca true ukoliko rec sadrzi slova "a", u suprotnom vraca false
let brStringovaSaSlovomA=0;
for(let i =0;i<stringovi.length; i++){
    let rec = stringovi[i];
    if(rec.includes("a") || rec.includes("A")){
        brStringovaSaSlovomA+=1;
    }
}
console.log(brStringovaSaSlovomA);

//Drugi nacin
let brStringovaSaSlovomA2=0;
//Ova for petlja ide element po element u nizu
for(let i =0;i<stringovi.length; i++){
    let rec= stringovi[i];
//Ova for petlja ide slovo po slovo u redi
    for(let j=0; j<rec.length;j++){ //da prodjemo kroz "rec"
        //rec[j] je karakter u reci (slovo u reci)
        if(rec[j] == "a"|| rec[j] == "A"){
            brStringovaSaSlovomA2+=1;
            break; //cim nadjes da ima "a" u elementu,tj. ovde imenu, odma ides na sledeci element
        }
    }
}
console.log(brStringovaSaSlovomA2);

//24.  i 25.
let niz1=[1,2,3];
let niz2=[4,5,6];
let c=[];
for(let i=0;i<niz1.length;i++){
    let x = niz1[i];
    let y = niz2[i];
    c.push(x);
    c.push(y);
}
console.log(c);

let d=[];
for(let i =0;i< niz1.length;i++){
    let x=niz1[i];
    let y=niz2[i];
    let z=x*y;
    d.push(z);
}
console.log(d);

