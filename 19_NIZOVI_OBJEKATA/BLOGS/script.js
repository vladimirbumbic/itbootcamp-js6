let blog={
    title: "Funkcije",
    likes:21,
    dislikes:1
}

let blogs = [
    {title:"Nizovi", likes:16, dislikes:5},
    {title:"grananje", likes:14, dislikes:0}
];

console.log(blogs);

/////////////////////////////

let blog1 = {
    title:"Musaka od tikvica",
    likes : 105,
    dislikes:31
};

let blog2 ={
    title:"Lazanje!",
    likes:236,
    dislikes:13
};

let blog3={
    title:"Zapecena boranija",
    likes:60,
    dislikes:32
};

let blogsArr = [blog1,blog2,blog3];

//Ispis objekata iz niza objekata
blogsArr.forEach(element => {
    console.log(element);
});

//Ispis naslova iz niza blogova forEach petljom
console.log(blog1.title);
blogsArr.forEach(element=>{
    console.log(element.title);
});

//Ispis naslova iz niza blogova for petljom
console.log(blogsArr[0]);  //Vraca objekat na nultoj poziciji u nizu(blog1)
console.log(blogsArr[0].title);  //Vraca naslov objekta na nultoj poziciji
for(let i=0; i< blogsArr.length;i++){
    console.log(blogsArr[i].title);
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumaLajkova = nizObj => {
    let ukupnoLajkova=0;

    nizObj.forEach(obj=>{
        ukupnoLajkova+=obj.likes;
    });

    return ukupnoLajkova;
}
console.log(sumaLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova=nizObj=>{
    let sum=sumaLajkova(nizObj);
    let br=nizObj.length;
    return sum/br;
}
console.log(prosekLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
//let lista="<ul>"; ili dole
let viseLajkova = nizObj=>{
   // let lista="<ul>";
    nizObj.forEach(elem=>{ //blog1-blog2-blog3
        if(elem.likes>elem.dislikes){
            console.log(elem.title);
           // lista+=`<li> ${elem.title}</li>`
        }
    });
   // lista+="</ul>";
   //document.body.innerHTML+= lista;
}
viseLajkova(blogsArr);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploViseLajkova=nizObj=>{
    nizObj.forEach(elem=>{
        if(elem.likes>=elem.dislikes*2){
            console.log(elem.title);
        }
    });
}
duploViseLajkova(blogsArr);  

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
//kako da izvucemo poslednju karakter iz reci
let rec = "Hello!";
let poslednjiKarakter=rec[rec.length-1];
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); //(1)- bez prvog slova
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length-1);
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); //vraca true ukoliko se string zavrsava sa !, u suprotnom vraca false
console.log(poslednjiKarakter3); 

//// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik=nizObj=>{
    nizObj.forEach(elem=>{
        let naslov=elem.title;
        //1.nacin
       // if(naslov[naslov.length-1]=="!"){  
         //  console.log(naslov); 
       // }

//Ukoliko se ne bi pisalo--let naslov=elem.title;
//dole bismo pisali--if(elem.title[elem.title.length-1]=="!")

       //2. nacin
       if(naslov.endsWith("!")){
           console.log(naslov);
       }
    });
}
uzvicnik(blogsArr);

console.log("Hello\tworld");
console.log("Hello\nworld");