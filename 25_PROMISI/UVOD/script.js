// 1. Kreiranje XML objekat
let request = new XMLHttpRequest();

request.addEventListener("readystatechange",()=>{
    if(request.readyState==4 && request.status==200){
        console.log(request.responseText);
    }
    else if(request.readyState===4){
        console.log("Ne mogu da dohvatim podatke");
    }
});

// 2. Otvaranje kreiranog zahteva
request.open("GET", "./JSON/todos.json")

// 3. Saljemo request
request.send();


//PRIMER CALLBACK FUNKCIJE

//Funkcija myFunc prima kao parametar drugu funkciju(callbackFunction)
//myFunc moze da poziva funkciju koja joj je prosledjena kao parametar i da joj prosledjuje argumente
let myFunc = (callbackFunction) =>{ //moze i bez zagrada kao dole kod value
    let value1 = 5;
    let value2 = 6;
    callbackFunction(value1, value2);
}

//Kada pozivamo funkciju myFunc ona ocekuje da joj se prosledi druga funkcija tj. mi joj prosledjujemo realizaciju callbackFunction funkcije(telo funkcije)
myFunc((val1, val2)=>{ //ne mora value, moze sta god  npr. a, i dole a
    console.log(val1 + val2) //vraca vrednost kolbek funkcije, dakle 5
});

//sto prosledimo gore, postaje parametar ove dole